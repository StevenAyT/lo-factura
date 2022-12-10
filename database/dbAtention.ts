import { db } from '.';
import { isValidObjectId } from 'mongoose';
import { Atention } from '../models';
import { ClientAtention } from '../interfaces/atention';

export const getAtentionsClients = async () => {

    await db.connect()
    const clientsAtention = await Atention.find().lean()
    await db.disconnect()

    return JSON.parse(JSON.stringify(clientsAtention))
}


export const getClientAtention = async (id: string): Promise<ClientAtention | null> => {

    if (!isValidObjectId(id)) return null

    await db.connect()
    const userAtentionDetail = await Atention.findById(id).lean()
    await db.disconnect()

    if (!userAtentionDetail) return null

    return JSON.parse(JSON.stringify(userAtentionDetail))

}