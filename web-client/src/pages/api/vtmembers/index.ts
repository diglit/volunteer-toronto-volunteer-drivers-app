import type { NextApiRequest, NextApiResponse } from 'next';
import MockMember from './mockMember';

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    res.status(200).json({ data: MockMember.getMembers() });
}