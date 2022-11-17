import { useContext } from "react"
import Link from "next/link"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { SidebarContext } from "../Sidebar"
import { SidebarItemCommonProps } from "../interfaces"

export const ItemSimple = ({ title, Icon }: SidebarItemCommonProps) => {

    const { handleToggleSidebar } = useContext(SidebarContext)

    return (
        <Link href={`/${title.toLowerCase()}`} passHref style={{ textDecoration: "none" }} >
            <ListItem disablePadding onClick={handleToggleSidebar}
                sx={{
                    borderWidth: "1px", borderColor: "primary.light", borderStyle: "solid",
                    borderRadius: "10px", mt: 0.5, textDecoration: "none"
                }}>
                <ListItemButton sx={{ borderRadius: "10px" }}>
                    <ListItemIcon sx={{ color: "primary.light" }}>
                        {Icon}
                    </ListItemIcon>
                    <ListItemText primary={title} sx={{ textDecoration: "none" }} primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: "primary.light",
                    }} />
                </ListItemButton>
            </ListItem>
        </Link>
    )
}