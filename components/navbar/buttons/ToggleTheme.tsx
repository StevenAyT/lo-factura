import IconButton from "@mui/material/IconButton"
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { useUIApp } from "../../../hooks/useUIApp";

export const ToggleTheme = () => {
    const { toggleTheme, handleToggleTheme } = useUIApp()
    return (
        <IconButton aria-label="delete" size="medium" onClick={handleToggleTheme} >
            {toggleTheme
                ? <LightModeOutlinedIcon fontSize="inherit" />
                : <NightlightOutlinedIcon fontSize="inherit" />
            }
        </IconButton>
    )
}
