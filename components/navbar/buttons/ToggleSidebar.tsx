import IconButton from "@mui/material/IconButton"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUIApp } from "../../../hooks/useUIApp"

export const ToggleSidebar = () => {
    const { handleToggleSidebar } = useUIApp()
    return (
        <IconButton onClick={handleToggleSidebar} aria-label="delete" size="medium"  >
            <MenuOutlinedIcon fontSize="inherit" />
        </IconButton>
    )
}
