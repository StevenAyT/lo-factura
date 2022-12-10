import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useClients } from '../../hooks/useClients';


interface IFormAtention {
    nombre: string;
    nit: number;
    telefono: number;
    correo: string;
    nombreEmpresa: string;
    tipoSolicitud: string;
    mensaje: string;
}

const AtentionPage: NextPage = () => {
    // TODO: ADD Layout

    const { newAtentionClient } = useClients()

    const [tipoSolicitud, setTipoSolicitud] = useState("")

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IFormAtention>()

    const handleChange = (event: SelectChangeEvent) => setTipoSolicitud(event.target.value as string);

    const onSubmit: SubmitHandler<IFormAtention> = data => newAtentionClient(data)

    // TODO: ADD breakpoints

    return (
        <Box component="form" autoComplete="on" onSubmit={handleSubmit(onSubmit)} sx={{ bgcolor: "none" }}>
            <Paper sx={{ bgcolor: "none", p: 4 }} elevation={10} >
                <Typography align="center" variant="h2" fontWeight="bolder">Solicitud de Atencion</Typography>
                <Stack direction="row" spacing={3}>
                    <TextField
                        {...register("nombre", {
                            required: { value: true, message: "Nombre es obligatorio" },
                            min: { value: 3, message: "El nombre debe tener minimo 3 caracteres" }
                        })}
                        error={Boolean(errors?.nombre)}
                        helperText={String(errors.nombre?.message || "")}
                        label="Nombre" type="text" sx={{ width: 320 }}
                    />

                    <TextField
                        {...register("nit", {
                            required: { value: true, message: "NIT es obligatorio" },
                            minLength: { value: 9, message: "El NIT debe contener 9 caracteres" },
                            maxLength: { value: 9, message: "El NIT debe ser de 9 caracteres" },
                        })}
                        error={Boolean(errors?.nit)}
                        helperText={String(errors.nit?.message || "")}
                        label="NIT" sx={{ width: 320 }} type="number"
                    />
                </Stack>

                <TextField
                    {...register("telefono", {
                        required: { value: true, message: "Telefono es obligatorio" },
                        minLength: { value: 7, message: "El Telefono debe contener minimo 7 caracteres" },
                        maxLength: { value: 10, message: "El Telefono debe tener maximo 10 caracteres" }
                    })}
                    error={Boolean(errors?.telefono)}
                    helperText={String(errors.telefono?.message || "")}
                    label="Telefono" sx={{ width: 320 }} type="number"
                />

                <FormControl sx={{ width: 320 }} error={Boolean(errors?.tipoSolicitud)}>
                    <InputLabel id="tipo-solicitud-select-label">Tipo</InputLabel>
                    <Select labelId="tipo-solicitud-select-label" label="Tipo"
                        {...register("tipoSolicitud", {
                            required: {
                                value: true,
                                message: "Selecciona la solicitud"
                            }
                        })}
                        error={Boolean(errors?.tipoSolicitud)}

                        value={tipoSolicitud}
                        onChange={handleChange}
                    >
                        <MenuItem value="Ventas">Ventas</MenuItem>
                        <MenuItem value="Soporte">Soporte</MenuItem>
                        <MenuItem value="Asesoria">Asesoria</MenuItem>
                        <MenuItem value="Peticion">Peticion</MenuItem>
                        <MenuItem value="Sugerencia">Sugerencia</MenuItem>
                    </Select>
                    <FormHelperText >{errors.tipoSolicitud?.message || ""}</FormHelperText>
                </FormControl>


                <TextField
                    {...register("correo", {
                        required: {
                            value: true,
                            message: "Correo obligatorio",
                        },
                        pattern: {
                            value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Correo con formato incorrecto",
                        },
                    })}
                    error={Boolean(errors?.correo)}
                    helperText={String(errors.correo?.message || "")}
                    label="Correo" fullWidth type="text"
                />

                <TextField {...register("nombreEmpresa", { required: { value: true, message: "Nombre Empresa obligatoria" } })}
                    error={Boolean(errors?.nombreEmpresa)}
                    helperText={String(errors.nombreEmpresa?.message || "")}
                    label="Empresa" fullWidth type="text"
                />

                <Stack spacing={4}>
                    <Typography align="center" variant="h4" fontWeight="bolder">Descripcion</Typography>
                    <TextField
                        {...register("mensaje",
                            {
                                required: {
                                    value: true,
                                    message: "Descripcion Obligatoria"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Debe contener como minimo 8 caracteres"
                                }
                            }
                        )}
                        error={Boolean(errors?.mensaje)}
                        helperText={String(errors.mensaje?.message || "")}
                        fullWidth multiline rows={3} type="text" />
                    <Button type="submit" variant="contained">Enviar</Button>
                </Stack>

            </Paper>
        </Box>
    )
}

export default AtentionPage