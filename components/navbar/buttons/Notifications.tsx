import { useState, MouseEvent } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton"
import Popover from "@mui/material/Popover";
import Divider from "@mui/material/Divider";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from '@mui/icons-material/Inbox';


export const Notifications = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null)

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton aria-label="delete" size="medium" onClick={handleClick}>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsOutlinedIcon fontSize="inherit" />
                </Badge>
            </IconButton>
            <Popover
                id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                sx={{
                    mt: 2,
                    ".MuiPopover-paper": {
                        border: "2px solid",
                        borderColor: "primary.dark",
                        bgcolor: "primary.light",
                        width: 260,
                        p: 1
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon >
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ mx: -1 }} primary="lorem impsum lorem asl poli" />
                    </ListItem>
                    <Divider sx={{ bgcolor: "red", my: 1.5 }} />
                    <ListItem disablePadding>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText sx={{ mx: -1 }} primary="lorem impsum lorem asl poli" />
                    </ListItem>
                </List>
            </Popover>
        </>
    )
}