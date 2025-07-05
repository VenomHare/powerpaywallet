import { SidebarCategory, SidebarConfig, SidebarItem } from "@powerpaywallet/schemas"
import { RootState } from "@powerpaywallet/store"
import { setActiveCategory, setOpen } from "@powerpaywallet/store/slices"
import { ArrowLeftToLine, ArrowRightFromLine } from "lucide-react"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
type Props = {
    children: React.ReactNode
    config: SidebarConfig
}

export const Sidebar = ({ children, config }: Props) => {

    const { activeCategory: active, isOpen } = useSelector((state: RootState) => state.sidebar);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setOpen(!isOpen))
        dispatch(setActiveCategory("none"))
    }
    const onCategoryClick = (category: SidebarCategory) => {
        if (!isOpen) {
            dispatch(setOpen(true))
        }
        if (active == category.id) {
            dispatch(setActiveCategory("none"))
        } else {
            dispatch(setActiveCategory(category.id))
        }
    }

    const handleOnClick = (item: SidebarItem) => {
        dispatch(setOpen(false));
        dispatch(setActiveCategory("none"))
        item.onClick();
    }

    return (<>
        <nav className="flex justify-between">
            <>
                <div className={`sm:block fixed top-[8svh] left-0 h-[92svh] bg-slate-200 z-50 shadow-xl shadow-slate-500 transition-all duration-200 animate-leftslidein ${isOpen ? "w-[200px] " :" hidden sm:block sm:w-[50px]"}`}>
                    <div className="w-full h-full flex flex-col items-center justify-between gap-2 pt-[15svh]">
                        <div className="w-full h-fit flex flex-col justify-start gap-4 " style={{ paddingLeft: isOpen ? "2dvw" : "0", alignItems: isOpen ? "flex-start" : "center" }}>
                            {
                                config.map((i) => {
                                    if (i.type === "item") {
                                        return (
                                            <button key={i.id} className="text-xl font-medium cursor-pointer font-[Manrope] flex gap-2" onClick={()=>handleOnClick(i)}>
                                                {
                                                    i.icon !== undefined && <>
                                                        {i.icon}
                                                    </>
                                                }
                                                {isOpen && i.label}
                                            </button>
                                        )
                                    }
                                    else {
                                        return (
                                            <div key={i.id} className="text-lg flex flex-col gap-1 items-start cursor-pointer" onClick={() => onCategoryClick(i)}>
                                                <div className="text-xl font-[Manrope] flex gap-2">
                                                    {
                                                        i.icon !== undefined && <>
                                                            {i.icon}
                                                        </>
                                                    }
                                                    {isOpen && i.label}
                                                </div>
                                                {
                                                    active === i.id &&
                                                    <div className="w-4/5 h-[1px] rounded-xl bg-slate-900 my-2"></div>
                                                }
                                                {
                                                    active === i.id &&
                                                    i.items.map(item => (
                                                        <button key={item.id} className="text-lg font-medium text-slate-700 cursor-pointer font-[Manrope]" onClick={()=>handleOnClick(item)}>
                                                            {item.label}
                                                        </button>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="w-full mb-[3svh] flex items-center justify-center gap-2 text-xl font-medium cursor-pointer font-[Manrope]" onClick={onClose}>
                            {
                                isOpen ?
                                    <ArrowLeftToLine />
                                    :
                                    <ArrowRightFromLine />
                            }
                            {isOpen && <>Close</>}

                        </div>
                    </div>
                </div>
            </>
            <div className="min-h-[92dvh] h-fit w-full bg-slate-300 flex ">
                <div className="h-full sm:w-[50px]"></div>
                {children}
            </div>
        </nav>
    </>)
}

