import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { NextPage } from "next"
import { HomeLayout } from "../../components/layouts"

const MainPage: NextPage = () => {
    return (
        <HomeLayout title="LoFactura - Software">
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography variant="h2" fontWeight="bolder" sx={{ color: "orange" }}>
                        LoFactura
                    </Typography>
                    <Typography variant="h2" fontWeight="bolder" sx={{ color: "blue" }}>
                        AyT Soluciones Empresariales S.A.S
                    </Typography>
                    <Typography variant="h2" fontWeight="bolder" sx={{ color: "yellow" }}>
                        Winsirius
                    </Typography>
                    <Button color="primary" size="large" variant="contained">
                        Continuar
                    </Button>
                </Grid>
            </Grid>
        </HomeLayout>
    )
}

export default MainPage