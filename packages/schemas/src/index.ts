import { ReactNode } from "react"

export type SidebarConfig = Array<SidebarCategory | SidebarItem>

export interface SidebarCategory {
    type: "category"
    id: string
    label: string
    items: Array<SidebarItem>
    icon: ReactNode;
}

export interface SidebarItem {
    type: "item"
    id: string
    label: string
    onClick: () => void,
    icon?: ReactNode;
}