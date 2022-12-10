import type { NextApiRequest, NextApiResponse } from 'next'

type Data =
    | { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {

        case "PUT":
            return updateRequestAtention(req, res)

        case "DELETE":
            return deleteRequestAtention(req, res)

        default:
            return res.status(400).json({ message: 'Método no existe ' + req.method });
    }
}

const updateRequestAtention = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    try {

    } catch (error) {

    }
}

const deleteRequestAtention = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query

    try {

    } catch (error) {

    }

}