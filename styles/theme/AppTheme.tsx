import { FC, ReactElement } from "react"
import { ThemeProvider } from "@mui/material/styles"
import { lightTheme } from "./lightTheme"

interface Props {
    children: ReactElement | ReactElement[]
}

export const AppTheme: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    )
}
