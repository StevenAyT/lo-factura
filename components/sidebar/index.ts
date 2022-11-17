import { Sidebar as SidebarHOC } from "./Sidebar"
import { SidebarSection } from "./SidebarSection"
import { SidebarItem } from "./item"
import { SidebarHOCProps } from "./interfaces"

export const Sidebar: SidebarHOCProps = Object.assign(SidebarHOC, {
    Section: SidebarSection,
    Item: SidebarItem
})

export default Sidebar