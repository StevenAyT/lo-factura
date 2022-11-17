import Box from "@mui/material/Box"
import List from "@mui/material/List"
import { Divider } from "./Divider";
import { SidebarSectionProps } from "./interfaces";

export const SidebarSection = ({ children }: SidebarSectionProps) => {
    return (
        <Box sx={{ width: 270, pt: 1, px: 1 }}>
            <Divider />
            <List>
                {children}
            </List>
        </Box>
    )
}
