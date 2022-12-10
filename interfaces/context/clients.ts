import { ClientAtention } from "../atention";

export interface Clients extends ClientAtention { }

export interface ClientState {
    clients: Clients[]
}

export type AtentionData = Omit<Clients,
    "id" | "idAtencion" | "respuesta" | "asesor" | "etapa" | "fechaCreacion">