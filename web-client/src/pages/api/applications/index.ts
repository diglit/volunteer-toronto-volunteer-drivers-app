import { NextApiRequest, NextApiResponse } from 'next'
import { DriverApplicationFactory } from 'shared/test-utils/factories'

const applications = ['Alice', 'Bob', 'Chirs','David'].map(firstName => DriverApplicationFactory.build({application:{firstName: firstName}}))

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json(applications)
}