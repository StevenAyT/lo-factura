import IconButton from "@mui/material/IconButton"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUI } from "../../../hooks/useUI"

export const ToggleSidebar = () => {
    const { handleToggleSidebar } = useUI()
    return (
        <IconButton color="secondary" onClick={handleToggleSidebar} aria-label="delete" size="medium"  >
            <MenuOutlinedIcon fontSize="inherit" />
        </IconButton>
    )
}
