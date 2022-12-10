import { MouseEvent, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

export const Account = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null)

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <IconButton color="secondary" aria-describedby={id} size="medium" onClick={handleClick}>
                <AccountCircleOutlinedIcon fontSize="inherit" />
            </IconButton>
            <Popover
                id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
                sx={{
                    mt: 2,
                    ".MuiPopover-paper": {
                        borderColor: "primary.main",
                        bgcolor: "primary.main",
                        width: 200,
                        p: 1
                    }
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography color="secondary" sx={{ pt: 2 }} align="center" fontWeight="bolder">Heidi Elena Carrillo Rodriguez</Typography>
                <Divider sx={{ bgcolor: "secondary.main", my: 2 }} />
                <Button size="medium" color="error" variant="contained" fullWidth startIcon={<LogoutIcon />}>
                    Logout
                </Button>
            </Popover>
        </>
    )
}