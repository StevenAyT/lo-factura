import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import { createContext } from 'react'
import { useUI } from '../../hooks/useUI'
import { SidebarProps } from './interfaces';

interface SidebarContextProps {
    handleToggleSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextProps)

const { Provider } = SidebarContext

export const Sidebar = ({ children }: SidebarProps) => {

    const { toggleSidebar, handleToggleSidebar } = useUI()

    return (
        <Provider value={{ handleToggleSidebar }}>
            <Drawer anchor="left"
                open={toggleSidebar}
                onClose={handleToggleSidebar}
                sx={{
                    ".MuiDrawer-paper": {
                        borderRadius: 4,
                        margin: 0.5,
                    }
                }}
            >
                <Paper sx={{
                    width: 300, height: "100%",
                    bgcolor: "primary.main",
                    p: 2
                }}>
                    {children}
                </Paper>
            </Drawer >
        </Provider>
    )
}
