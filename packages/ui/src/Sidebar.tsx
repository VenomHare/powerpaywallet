import { SidebarConfig, SidebarItem } from "@powerpaywallet/schemas"
import { RootState } from "@powerpaywallet/store"
import { setActiveCategory } from "@powerpaywallet/store/slices"
import React, { act } from "react"
import { useDispatch, useSelector } from "react-redux"
type Props = {
    children: React.ReactNode
    config: SidebarConfig
}

export const Sidebar = ({ children, config }: Props) => {

    const active = useSelector((state: RootState) => state.sidebar.activeCategory);
    const dispatch = useDispatch();

    return (<>
        <div className="flex justify-between">
            <>
                <div className="sticky top-[8svh] left-0 h-[92svh] w-[12svw] bg-slate-200 shadow-xl shadow-slate-500">
                    <nav className="w-full h-full flex flex-col items-center justify-start gap-2 pt-[15svh]">
                        {
                            config.map((i) => {
                                if (i.type === "item") {
                                    return (
                                        <button key={i.id} className="text-xl font-medium cursor-pointer font-[Manrope]" onClick={i.onClick}>
                                            {i.label}
                                        </button>
                                    )
                                }
                                else {
                                    return (
                                        <div key={i.id} className="text-lg flex flex-col gap-1 items-center cursor-pointer" onClick={() => { active == i.id ? dispatch(setActiveCategory("none")) : dispatch(setActiveCategory(i.id)) }}>
                                            <div className="text-xl font-[Manrope]">{i.label}</div>
                                            {
                                                active === i.id &&
                                                    <div className="w-full h-[1px] rounded-xl bg-slate-900 my-2"></div>
                                            }
                                            {
                                                active === i.id &&
                                                i.items.map(item => (
                                                    <button key={item.id} className="text-xl font-medium cursor-pointer font-[Manrope]" onClick={item.onClick}>
                                                        {item.label}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                    </nav>

                </div>
            </>
            <div className="h-auto w-[88svw] bg-slate-300">
                {children}
            </div>
        </div>
    </>)
}

