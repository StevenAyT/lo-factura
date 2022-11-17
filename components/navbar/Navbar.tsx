import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar"
import { Account, Notifications, ToggleSidebar, ToggleTheme } from "./buttons";

export const Navbar = () => {

    return (
        <AppBar position="fixed" sx={{ height: 58, bgcolor: "primary.light" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <ToggleSidebar />
                </Box>

                <Box>
                    <ToggleTheme />
                    <Notifications />
                    <Account />
                </Box>
            </Toolbar>
        </AppBar>
    )
}