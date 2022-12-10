import mongoose, { Model, Schema } from "mongoose";
import { ClientAtention } from "../interfaces/atention";

export interface IAtention extends ClientAtention { }

const atentionSchema = new Schema({
    idAtencion: {
        type: String,
        requiered: true,
        unique: true
    },
    nombre: {
        type: String,
        requiered: true
    },
    correo: {
        type: String,
        requiered: true
    },
    nit: {
        type: String,
        requiered: true
    },
    nombreEmpresa: {
        type: String,
        requiered: true
    },
    telefono: {
        type: Number,
        requiered: true
    },
    mensaje: {
        type: String,
        requiered: true,
    },
    tipoSolicitud: {
        type: String,
        requiered: true,
        enum: [
            "Ventas", "Soporte",
            "Asesoria", "Peticion",
            "Sugerencia", "Felicitacion"
        ]
    },
    // TODO: Pendiente schema
    asesor: {
        type: String,
        default: "Sin Asignar"
    },

    respuesta: {
        type: String,
    },

    etapa: {
        type: String,
        enum: ["Sin Inicio", "En Proceso", "Terminado", "Incompleto"],
        default: "Sin asignar"
    },
    fechaCreacion: {
        type: Number,
        requiered: true,
        default: Date.now()
    },

},
    {
        versionKey: false
    })

const AtentionModel: Model<IAtention> = mongoose.models.Entry || mongoose.model("Entry", atentionSchema)

export default AtentionModel