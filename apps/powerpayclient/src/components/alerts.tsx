import { RootState } from "@powerpaywallet/store";
import { CircleCheckBig, Info, TriangleAlert } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";

export const AlertContainer = () => {

    const { alerts } = useSelector((state: RootState) => state.alerts);


    return (<>
        <div className="absolute bottom-0 left-0 z-[100] p-5 w-full h-full flex items-end justify-center overflow-hidden pointer-events-none">
            {
                alerts.map(alert=>
                    <Alert text={alert.type} type={alert.type} />
                )
            }
        </div>
    </>)
}

interface Props {
    text: string;
    type?: "error" | "info" | "success" | "none"
}



const Alert = ({ text, type = "none" }: Props) => {
    return <div className="w-[90%] md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-xl shadow-slate-600/50 bg-slate-200 text-slate-500 flex gap-2 items-center animate-alertin">
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