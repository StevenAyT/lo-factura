import { ReactElement } from "react"
import { urlToHttpOptions } from "url";

type ChildrenElement = ReactElement | ReactElement[]

// Type Sidebar 

export interface SidebarProps {
    children: ChildrenElement
}

// Type SidebarSection

export interface SidebarSectionProps {
    children: ChildrenElement
}

// Types SidebarItem

export interface SidebarItemAndOptionsProps {
    title: string;
    Icon: JSX.Element;
    options: string[];
}

export type SidebarItemCommonProps = Omit<SidebarItemAndOptionsProps, "options">

type SidebarItemConditionalProps =
    | { title: string, Icon: JSX.Element, options: false }
    | { title: string, Icon: JSX.Element, options: string[] }


export type SidebarItemProps = SidebarItemCommonProps & SidebarItemConditionalProps

//TODO: Hacerlo extensible para poder agregar solo una opcion y no genere desplegable


// Type SidebarHOCProps

export interface SidebarHOCProps {
    ({ children }: SidebarProps): JSX.Element;
    Section: ({ children }: SidebarSectionProps) => JSX.Element;
    Item: ({ title, Icon, options }: SidebarItemProps) => JSX.Element;
}