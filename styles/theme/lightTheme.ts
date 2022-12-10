import { createTheme } from "@mui/material/styles";


export const lightTheme = createTheme({
    palette: {
        background: {
            default: "#F7F7F7",
        },
        primary: {
            // Interfaces secundarias paper & .MuiPaper, divider  
            dark: "#dde1e6",
            // Navbar, Sidebar(fondo), DataGrid
            main: "#0d0747",
            // Botones Chekcbox Slide
            light: "#f5e0e0",
        },
        secondary: {
            // Color : iconos, bordes, Divider y letra
            main: "#e8eaf6",
        },
    },
})