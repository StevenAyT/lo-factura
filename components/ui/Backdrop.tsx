import BackdropMUI from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { FC } from 'react'

export const Backdrop: FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <BackdropMUI sx={{ bgcolor: "primary.dark" }} open={loading} >
            <CircularProgress color="primary" />
        </BackdropMUI>
    )
}