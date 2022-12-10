import { useContext } from "react"
import { UIContext } from "../context/ui/UIContext"

export const useUI = () => {
    const { state, handleToggleSidebar } = useContext(UIContext)

    return { ...state, handleToggleSidebar }
}