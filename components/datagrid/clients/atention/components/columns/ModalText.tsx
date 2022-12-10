import { useState } from "react";
import { GridRenderCellParams } from "@mui/x-data-grid"
import IconButton from "@mui/material/IconButton"
import VisibilityIcon from '@mui/icons-material/Visibility';
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export const ModalText = (params: GridRenderCellParams) => {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div style={{ width: "100%", display: "flex" }}>
                <strong style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "70%", marginTop: 10 }}>
                    {params.value.slice(0, 20)}
                </strong>
                <IconButton onClick={() => setOpen(true)}>
                    <VisibilityIcon color="primary" />
                </IconButton>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Paper elevation={8} sx={{
                    position: "absolute", top: "50%", left: "50%", transform: 'translate(-50%, -50%)', width: 460, height: 400, pt: 4,
                    overflow: "hidden", overflowY: "auto"
                }}>
                    <Typography variant="h4" color="primary" fontWeight="bold" align="center" >Mensaje de la solicitud</Typography>
                    <Typography variant="body1" m={2}>{params.formattedValue}</Typography>
                </Paper>
            </Modal>
        </>
    )
}