import { GridActionsCellItem, GridColumns, GridRenderCellParams, GridRowId, GridValueGetterParams } from '@mui/x-data-grid';
import { CustomPagination, CustomToolbar, ModalText } from './';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import { useRouter } from 'next/router';
import { StyledDataGrid } from './styles';
import { dateFunctions } from '../../../../utils';

// TODO: Agregar interfaces y eliminar las filas creadas en Data

const DataGrid = ({ clients: rows }: any) => {

    const router = useRouter()

    // Funciones 
    const handleEdit = (id: GridRowId) => router.push(`/clients/atention/${id}`)

    const handleDelete = (id: GridRowId) => console.log("Pendiente")

    const getFormatDate = (params: GridValueGetterParams) => dateFunctions.formatDate(params.row.fechaCreacion)

    // Columnas del DataGrid
    const columns: GridColumns = [
        {
            field: 'idAtencion',
            headerName: 'ID',
            width: 70
        },
        {
            field: 'nombreEmpresa',
            headerName: 'Empresa',
            width: 170,
        },
        {
            field: 'nit',
            headerName: 'Nit',
            width: 110,
            type: 'number'
        },
        {
            field: 'telefono',
            headerName: 'Telefono',
            width: 120,
        },
        {
            field: 'correo',
            headerName: 'Correo Solicitante',
            width: 150,
        },
        {
            field: 'nombre',
            headerName: 'Nombre Cliente',
            width: 140,
        },
        {
            field: 'mensaje',
            headerName: 'mensaje',
            width: 170,
            renderCell: (params: GridRenderCellParams) => <ModalText {...params} />
        },

        {
            field: 'tipoSolicitud',
            headerName: 'Tipo',
            type: 'singleSelect',
            width: 130,
            valueOptions: ["Ventas", "Soporte", "Asesoria", "Peticion", "Sugerencia", "Felicitacion"],
            renderCell: ({ value }: GridRenderCellParams) => <Chip label={value} color="warning" variant="outlined" />
        },

        {
            field: 'asesor',
            headerName: 'Asignado',
            type: 'singleSelect',
            width: 120,
            valueOptions: ["Edison", "Nataly", "John", "Cristian", "Steven", "Santiago", "Gabriel", "Heidy", "Sin Asignar"],
            renderCell: ({ value }: GridRenderCellParams) => (
                <Chip label={value} color="info" variant="outlined" />
            )
        },
        {
            field: 'respuesta',
            headerName: 'Respuesta Asesor',
            width: 110,
        },

        {
            field: 'etapa',
            headerName: 'Etapa',
            type: 'singleSelect',
            width: 120,
            valueOptions: ["Pendiente", "Resuelto", "Sin Asignar", "Incompleto"],
            renderCell: ({ value }: GridRenderCellParams) => (
                <Chip label={value} color={value === "Pendiente" ? "error" : "success"} variant="outlined" />
            )
        },

        {
            field: 'fechaCreacion',
            headerName: 'Fecha',
            width: 170,
            valueGetter: getFormatDate
        },
        {
            field: "actions",
            type: "actions",
            width: 100,
            cellClassName: "actions",
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<EditOutlinedIcon color="primary" />}
                        label="Save"
                        onClick={() => handleEdit(id)}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteOutlineOutlinedIcon color="error" />}
                        label="Save"
                        onClick={() => handleDelete(id)}
                    />,
                ]
            }
        }
    ];

    return (
        <Box sx={{ height: 400, width: '97%', m: 2 }}>
            <StyledDataGrid
                components={{
                    Toolbar: CustomToolbar,
                    Pagination: CustomPagination,
                }}
                loading={rows.length === 0}
                rows={rows ?? []}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    )
}

export default DataGrid