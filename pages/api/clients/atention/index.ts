import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { ClientAtention } from '../../../../interfaces/atention';
import { Atention } from '../../../../models';

type Data =
    | ClientAtention[]
    | ClientAtention
    | { message: string }

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case "GET":
            return getAllAtentions(req, res);

        case "POST":
            return newRequestAtention(req, res);

        default:
            return res.status(400).json({ message: 'Método no existe ' + req.method });
    }
}



const getAllAtentions = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
        await db.connect()
        const allClientsAtention = await Atention.find()
        await db.disconnect()
        return res.status(200).json(allClientsAtention)
    } catch (error: any) {
        res.status(500).json({
            message: error.message,
        });
    }
}

const newRequestAtention = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { body } = req

    try {
        await db.connect()
        const userAtention = new Atention(body)
        const userSaved = await userAtention.save()
        await db.disconnect()
        return res.status(200).json(userSaved)
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        })
    }

}