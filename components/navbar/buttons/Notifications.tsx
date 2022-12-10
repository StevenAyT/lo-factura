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
            <IconButton color="secondary" aria-label="delete" size="medium" onClick={handleClick}>
                <Badge badgeContent={4} color="secondary">
                    <NotificationsOutlinedIcon fontSize="inherit" />
                </Badge>
            </IconButton>
            <Popover
                id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                sx={{
                    mt: 2,
                    ".MuiPopover-paper": {
                        bgcolor: "primary.main",
                        width: 260,
                        maxHeight: 300,
                        p: 1
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <List sx={{ py: 2 }}>
                    {[0, 1,].map((elm) => (
                        <div key={elm}>
                            <ListItem disablePadding>
                                <ListItemIcon sx={{ color: "secondary.main" }}>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ mx: -1, color: "secondary.main" }} primary={`Example text for a notifications in app ${elm + 1}`} />
                            </ListItem>
                            {/* FIXME:: Is a example for view conditional Divider */}
                            {
                                elm !== 1 && <Divider sx={{ bgcolor: "secondary.main", my: 1.5 }} />
                            }
                        </div>
                    ))}
                </List>
            </Popover>
        </>
    )
}