import { createContext } from "react";
import { AtentionData, ClientState } from "../../interfaces/context/clients";


interface ContextProps {
    state: ClientState;
    newAtentionClient: (newAtention: AtentionData) => void;
}

export const ClientsContext = createContext<ContextProps>({} as ContextProps)