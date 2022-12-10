import { GridToolbarContainer, GridToolbarColumnsButton, GridToolbarDensitySelector, GridToolbarExport, GridToolbarExportContainer, GridToolbarFilterButton } from "@mui/x-data-grid"

export const Toolbar = () => {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton />
            <GridToolbarContainer />
            <GridToolbarDensitySelector />
            <GridToolbarExport />
            <GridToolbarExportContainer />
            <GridToolbarFilterButton />
        </GridToolbarContainer>
    )
}