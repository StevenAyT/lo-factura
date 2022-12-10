import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar"
import { Account, Notifications, ToggleSidebar } from "./buttons";

export const Navbar = () => {

    return (
        <AppBar position="fixed" sx={{ height: 58, bgcolor: "primary.main" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <ToggleSidebar />
                </Box>

                <Box>
                    <Notifications />
                    <Account />
                </Box>
            </Toolbar>
        </AppBar>
    )
}