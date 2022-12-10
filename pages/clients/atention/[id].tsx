import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../../../components/layouts';
import { dbAtention } from '../../../database';
import { ClientAtention } from '../../../interfaces/atention';
import { dateFunctions } from '../../../utils';

interface Props {
    data: ClientAtention
}

// TODO: Add breakpoints

const DetailAtentionClientPage: NextPage<Props> = ({ data }) => (
    <MainLayout title={data.nombreEmpresa}>
        <Box m={2}>
            <Grid container spacing={2} >
                <Grid item xs={12} my={4}>
                    <Typography variant="h3" fontWeight="bolder" align="center" color="primary">
                        {data.nombreEmpresa}
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Paper sx={{ height: 150, borderRadius: 3 }} elevation={6}>
                        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
                            <Typography variant="h5" fontWeight="bolder">
                                {data.idAtencion}
                            </Typography>
                            <Typography variant="h5" fontWeight="bolder">
                                NIT: {data.nit}
                            </Typography>
                            <Stack spacing={2} direction="row">
                                <Chip variant="filled" color="primary" label={data.etapa} />
                                <Chip variant="filled" color="warning" label={data.asesor} />
                                <Chip variant="filled" color="info" label={data.tipoSolicitud} />
                            </Stack>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper sx={{ height: 150, borderRadius: 3 }} elevation={6}>
                        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
                            <Typography variant="h5" fontWeight="bolder">
                                {data.correo}
                            </Typography>
                            <Typography variant="h5" fontWeight="bolder">
                                Enviado por: {data.nombre}
                            </Typography>
                        </Stack>
                    </Paper>
                </Grid>


                <Grid item xs={4}>
                    <Paper sx={{ height: 150, borderRadius: 3 }} elevation={6}>
                        <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
                            <Typography variant="h5" fontWeight="bolder">
                                Tel: {data.telefono}
                            </Typography>
                            <Typography variant="h5" fontWeight="bolder">
                                Creado: {dateFunctions.formatDate(data.fechaCreacion)}
                            </Typography>
                            <Typography variant="h5" fontWeight="bolder">
                                {dateFunctions.distanceFromDateToToday(data.fechaCreacion)}
                            </Typography>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} >
                    <Paper sx={{ height: 300, borderRadius: 3, maxHeight: 300, overflowY: "auto" }} elevation={6}>
                        <Stack spacing={2} alignItems="center" py={4} sx={{ height: "100%" }}>
                            <Typography variant="h4" fontWeight="bolder">Mensaje</Typography>
                            <Typography variant="h5" fontWeight="bolder">
                                {data.mensaje}
                            </Typography>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs={12} >
                    <Paper sx={{ px: 10, height: 270, borderRadius: 3, maxHeight: 300, overflowY: "auto" }} elevation={6} >
                        <Stack spacing={2} alignItems="center" py={4} sx={{ height: "100%" }}>
                            <Typography variant="h4" fontWeight="bolder" align='center'>Respuesta Asesor</Typography>
                            <TextField multiline fullWidth rows={4} />
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </MainLayout>
)

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string }

    const infoAtentionClient = await dbAtention.getClientAtention(id)

    if (!infoAtentionClient) {
        return {
            redirect: {
                destination: "/atention/clients",
                permanent: false
            }
        }
    }

    return {
        props: {
            data: infoAtentionClient
        }
    }
}

export default DetailAtentionClientPage