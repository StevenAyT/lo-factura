import { Clients, ClientState } from "../../interfaces/context"

type ClientsActions =
    | { type: "saveAtentionClient" }
    | { type: "allAtentionClients", payload: Clients[] }

export const clientsReducer = (state: ClientState, action: ClientsActions): ClientState => {
    switch (action.type) {

        case "allAtentionClients":
            return {
                ...state,
                clients: [...action.payload],
            }

        default:
            return state
    }
}