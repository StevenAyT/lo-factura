import { FC, ReactElement, ReactNode } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme, darkTheme } from "./"
import { useUIApp } from "../../hooks/useUIApp"

interface Props {
    children: ReactElement | ReactElement[]
}

export const AppTheme: FC<Props> = ({ children }) => {
    const { toggleTheme } = useUIApp()
    return (
        <ThemeProvider theme={toggleTheme ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    )
}
