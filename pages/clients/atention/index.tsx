import Typography from "@mui/material/Typography"
import { NextPage } from 'next'
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { MainLayout } from "../../../components/layouts"
import { FeedBackLoading } from "../../../components/ui"
import { useClients } from "../../../hooks/useClients"

// LazyLoading DataGrid
const LazyDataGrid = dynamic(() => import("../../../components/datagrid/clients/atention/DataGrid"), { suspense: true })

const AtentionClientsPage: NextPage = () => {
    const { clients } = useClients()

    return (
        <Suspense fallback={<FeedBackLoading loading={true} />}>
            <MainLayout title="Atencion Cliente">
                <Typography variant="h3" align="center" color="primary" p={2} fontWeight="bold">
                    Atencion al Cliente
                </Typography>
                <LazyDataGrid clients={clients} />
            </MainLayout>
        </Suspense>
    )
}

export default AtentionClientsPage