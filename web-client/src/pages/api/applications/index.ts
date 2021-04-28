import { NextApiRequest, NextApiResponse } from 'next'
import { applications } from '../../../shared/mockData'

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json(applications)
}