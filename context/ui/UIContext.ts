import { createContext } from "react";
import { UIState } from "../../interfaces/context";

interface ContextProps {
    state: UIState;
    handleToggleTheme: () => void;
    handleToggleSidebar: () => void;
}

export const UIContext = createContext<ContextProps>({} as ContextProps)