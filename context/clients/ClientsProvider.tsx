import { FC, ReactElement, useEffect, useReducer } from "react"
import { appApi } from "../../api"
import { AtentionData, Clients, ClientState } from "../../interfaces/context/clients"
import { ClientsContext } from "./ClientsContext"
import { clientsReducer } from "./clientsReducer"
import { v4 as uuid } from 'uuid';


const InitialState: ClientState = {
    clients: []
}

interface Props {
    children: ReactElement[] | ReactElement
}

export const ClientsProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(clientsReducer, InitialState)

    const getAllClientsAtention = async () => {
        const { data } = await appApi.get<Clients[]>("/clients/atention")
        const clients: Clients[] = data.map(({ _id, ...elms }: any) => ({ id: _id, ...elms }))
        dispatch({ type: "allAtentionClients", payload: clients })
    }

    const newAtentionClient = async (newAtention: AtentionData) => {
        const newRequestAtention = {
            idAtencion: `${newAtention.tipoSolicitud[0]}-${uuid()}`,
            etapa: "Sin Inicio",
            fechaCreacion: Date.now(),
            ...newAtention
        }
        console.log(newRequestAtention)

        const { data } = await appApi.post("/clients/atention", newRequestAtention)
        console.log(data)
    }

    const deleteAtentionClient = () => {

    }


    useEffect(() => {
        getAllClientsAtention()
    }, [])

    return (
        <ClientsContext.Provider value={{ state, newAtentionClient }}>
            {children}
        </ClientsContext.Provider>
    )
}