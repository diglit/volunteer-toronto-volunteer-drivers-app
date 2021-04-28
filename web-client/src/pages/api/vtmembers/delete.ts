import MockMember from "./mockMember";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse):void {
    const {id} = req.body

    MockMember.deleteMember(id)
    console.log(id)

    res.status(200).json({ data: {id}});
}