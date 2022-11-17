import Typography from "@mui/material/Typography"

interface SidebarTitleProps {
    title: string;
}

export const SidebarTitle = ({ title }: SidebarTitleProps) => {
    return (
        <Typography color="primary.light" variant="h4" align="center" fontWeight="bolder" >{title}</Typography>
    )
}
