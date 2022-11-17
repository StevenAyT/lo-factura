import { useContext } from "react"
import { UIContext } from "../context/ui/UIContext"

export const useUIApp = () => {
    const { state, handleToggleSidebar, handleToggleTheme } = useContext(UIContext)

    return { ...state, handleToggleSidebar, handleToggleTheme }
}