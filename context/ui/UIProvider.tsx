import { FC, ReactElement, useReducer } from 'react'
import { UIState } from '../../interfaces/context'
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

const InitialState: UIState = {
    toggleTheme: false,
    toggleSidebar: false,
}

interface Props {
    children: ReactElement[] | ReactElement;
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, InitialState)

    const handleToggleTheme = () => dispatch({ type: "toggleTheme" })

    const handleToggleSidebar = () => dispatch({ type: "toggleSidebar" })

    return (
        <UIContext.Provider value={{ state, handleToggleTheme, handleToggleSidebar }}>
            {children}
        </UIContext.Provider>
    )
}
