import PaginationMUI from "@mui/material/Pagination"
import { useGridApiContext, useGridSelector, gridPageSelector, gridPageCountSelector } from "@mui/x-data-grid"

export const Pagination = () => {
    const apiRef = useGridApiContext()
    const page = useGridSelector(apiRef, gridPageSelector)
    const pageCount = useGridSelector(apiRef, gridPageCountSelector)
    return (
        <PaginationMUI
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(_event, value) => apiRef.current.setPage(value - 1)}
        />
    )
}