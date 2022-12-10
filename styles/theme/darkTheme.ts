import { createTheme } from "@mui/material/styles";


export const darkTheme = createTheme({
    palette: {
        background: {
            default: "#152430",
        },
        // Interface Principal -> Componentes grandes
        primary: {
            // INterfaces secundarias paper & .MuiPaper, divider  
            dark: "#0A1929",
            // dark: "#0A1929",
            // Navbar, Sidebar(fondo), DataGrid
            main: "#0d0747",
            // main: "#151f64",
            // Botones Chekcbox Slide
            light: "#2A3F54",
        },
        // Interface secundaria -> Componentes pequeños
        secondary: {
            // Color  Datagrid
            dark: "#7067a3",
            // Color : iconos, bordes, Divider y letra
            main: "#e8eaf6",
            // 
            light: "#FFFFFF",

        },

    },
})