export type SidebarConfig = Array<SidebarCategory | SidebarItem>

export interface SidebarCategory {
    type: "category"
    id: string
    label: string
    items: Array<SidebarItem>
}

export interface SidebarItem {
    type: "item"
    id: string
    label: string
    onClick: () => void
}