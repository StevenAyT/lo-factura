import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: `10px solid ${'#303030'}`,
    },
    '& .MuiDataGrid-cell': {
        color: theme.palette.primary.main,
        fontWeight: "bolder",
        boxShadow: 2,
        border: 2,
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
}));

export default StyledDataGrid
