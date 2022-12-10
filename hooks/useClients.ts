import { useContext } from "react"
import { ClientsContext } from "../context/clients/ClientsContext"

export const useClients = () => {
    const { state, newAtentionClient } = useContext(ClientsContext)

    return { ...state, newAtentionClient }
}