import { Button } from "@powerpaywallet/ui/button";
import React, { createContext, useContext, useState } from "react"

interface Props {
    title: string,
    description?: string,
    className?: string,
    onClose?: () => void,
    onApprove?: () => void | Promise<void>,
    onCancel?: () => void
}

export const AlertDialog = ({ title, description, className, onClose, onApprove, onCancel }: Props) => {

    const context = useContext(AlertContext);

    const handleClose = () => {
        onClose?.();
        context.setIsOpen(false);
    }

    const handleApprove = () => {
        onApprove?.();
        handleClose();
    }

    const handleCancel = () => {
        onCancel?.();
        handleClose();
    }

    if (!context.isOpen) {
        return (<></>)
    }
    return (<>
        <div className={`z-[99] fixed top-0 left-0 w-dvw h-dvh bg-black/80 flex items-center justify-center ${className}`}>
            <div className="w-full mx-1 sm:mx-0 max-w-md min-h-[10dvh] bg-slate-200 sm:p-2 md:p-4 rounded-md border border-slate-500 shadow-xl flex flex-col items-end gap-3">
                <p className="w-full font-medium px-2 text-balance">{title}</p>
                {
                    description &&
                    <p className="w-full px-2 text-[1.1rem] text-slate-400">{description}</p>
                }
                <div className="flex gap-2">
                    <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleApprove}>Delete</Button>
                </div>
            </div>
        </div>
    </>)
}

export const AlertTrigger = ({ children, className }:
    {
        children: React.ReactNode,
        className?: string
    }) => {

    const context = useContext(AlertContext);

    return (<>
        <span onClick={() => { context.setIsOpen(true) }} className={className}>
            {children}
        </span>
    </>)
}

export const AlertParent = ({ children }: { children: React.ReactNode }) => {

    const [isOpen, setIsOpen] = useState(false);

    return <>
        <AlertContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </AlertContext.Provider>
    </>
}

interface AlertContextType {
    isOpen: boolean,
    setIsOpen: (open: boolean) => void
}

const AlertContext = createContext<AlertContextType>({
    isOpen: false,
    setIsOpen: () => { }
})