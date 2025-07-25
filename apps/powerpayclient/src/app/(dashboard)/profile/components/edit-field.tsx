"use client";
import { AppDispatch, RootState } from "@powerpaywallet/store"
import { Edit3 } from "lucide-react"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setEditingFieldId } from "@powerpaywallet/store/slices";
import { Button } from "@powerpaywallet/ui/button";
import { alert } from "../../../../components/alerts";

interface Props {
    id: string,
    label: string,
    value: any,
    type?: "text" | "number" | "email",
    onSave: (value: string) => void
}

export const EditableField = ({ id, value, label, onSave, type = "text" }: Props) => {

    const [updatedValue, setUpdatedValue] = useState(value);
    const { editingProfileFieldId } = useSelector((state: RootState) => state.states);
    const appDispatch = useDispatch<AppDispatch>();
    const dispatch = useDispatch();

    useEffect(() => {

    }, [editingProfileFieldId])

    const EnterEditMode = () => {
        if (editingProfileFieldId !== "none") {
            alert(appDispatch, "Please save or cancel your current changes before editing another field.", "error");
            return
        }
        dispatch(setEditingFieldId(id));
    }

    return (<>
        <div className='flex flex-col items-start overflow-x-hidden'>
            <p className='text-slate-600 text-xl'>{label}</p>
            {
                editingProfileFieldId == id ?
                    <div className='flex w-full sm:w-[75dvw] md:w-[60dvw] lg:w-[50dvw] xl:w-[40dvw]  items-center gap-2 flex-wrap'>
                        <input 
                            className='text-xl w-full text-slate-800 font-medium border-1 rounded px-2 py-1' 
                            type={type} 
                            defaultValue={value} 
                            id="name" 
                            maxLength={id == "phone" ? 10 : 100}
                            onChange={(e) => { setUpdatedValue(e.target.value) }}  
                        />
                        <Button onClick={() => onSave(updatedValue)}>Save</Button>
                        <Button variant={'ghost'} onClick={() => { dispatch(setEditingFieldId("none")) }}>Cancel</Button>
                    </div>
                    :
                    <div className='flex items-center gap-2'>
                        <p className='text-2xl text-slate-800 font-medium'>
                            <MaskValues value={value} id={id} />
                        </p>
                        <Edit3 className='cursor-pointer' size={20} onClick={EnterEditMode} />
                    </div>
            }
        </div>
    </>)
}

const MaskValues = ({ value, id }: {
    value: string,
    id: string
}) => {
    switch (id) {
        case "phone":
            return maskNumber(value);
        case "email":
            return maskEmail(value);
        default:
            return value
    }
}


function maskEmail(email?: string | null) {
    if (!email) {
        return ""
    }
    const [firstpart, endpart] = email.split("@");
    if (!firstpart || !endpart) {
        return email
    }
    let maskedEmail = firstpart.slice(0, 1);
    maskedEmail = maskedEmail.padEnd(firstpart.length - 1, "*");
    maskedEmail = maskedEmail + firstpart.slice(firstpart.length - 1, firstpart.length)

    return maskedEmail + "@" + endpart;
}

function maskNumber(phone?: string | null) {
    if (!phone) {
        return ""
    }
    let masked = phone.slice(0, 2);
    masked = masked.padEnd(7, "*") + phone.slice(phone.length - 1, phone.length);
    return masked
}