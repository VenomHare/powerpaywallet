"use client";
import { AppDispatch, RootState } from "@powerpaywallet/store";
import { clearScreenAlert, removeAlert, removeAlertFromScreen, showAlert } from "@powerpaywallet/store/slices";
import { CircleCheckBig, Info, TriangleAlert } from "lucide-react"
import { Duru_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";

interface AlertConfig {
    duration?: number
}

const DEFAULT_TIMEOUT_DURATION = 3000;

export const alert = (dispatch: AppDispatch, text: string, type?: "error" | "info" | "success", config?: AlertConfig) => {
    const key = Date.now()
    dispatch(showAlert({
        text,
        type,
        key
    }))
    setTimeout(()=>{dispatch(removeAlertFromScreen(key));}, config?.duration || DEFAULT_TIMEOUT_DURATION)
}

export const AlertContainer = () => {

    const { alerts, removedAlerts } = useSelector((state: RootState) => state.alerts);
    const dispatch = useAppDispatch();
    // const [timeOuts, setTimeOuts] = useState<Array<NodeJS.Timeout>>([]);
    
    useEffect(()=>{
        if (removedAlerts.length < 1) return;
        removedAlerts.forEach(alert => {
            const timeout = setTimeout(()=>{
                dispatch(removeAlert(alert.key));
                dispatch(clearScreenAlert(alert.key));
            }, 1000)
            // setTimeOuts(prev=>[...prev, timeout]);
        })

        return () => {
            // timeOuts.forEach(t => {
            //     clearTimeout(t);
            // })
            // setTimeOuts([]);
        }
    },[removedAlerts])

    return (
        <div className="absolute bottom-0 left-0 z-[100] p-5 w-full h-full flex items-end justify-center overflow-hidden pointer-events-none">
            <div className="w-full h-full flex flex-col items-center justify-end gap-2">
                {
                    alerts.map(alert =>
                        <Alert key={alert.key} text={alert.text} type={alert.type} removed={removedAlerts.find(a => a.key === alert.key)?true:false} />
                    )
                }
            </div>
        </div>
    )
}

interface Props {
    text: string;
    type?: "error" | "info" | "success" | "none";
    removed: boolean,
}



const Alert = ({ text,  removed, type = "none" }: Props) => {
    console.log(removed);
    return <div className={"w-[90%] md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-xl shadow-slate-600/50 bg-slate-200 text-slate-500 flex gap-2 items-center "+ (removed ? " animate-alertout" : " animate-alertin")}>
        {
            type == "info" &&
            <Info size={25} className="grow-0 w-[10%]" />
        }
        {
            type == "error" &&
            <TriangleAlert size={25} className="grow-0 w-[10%] text-red-600" />
        }
        {
            type == "success" &&
            <CircleCheckBig size={25} className="grow-0 w-[10%] text-green-600" />
        }
        <div className="w-full">
            {text}
        </div>
    </div>
}