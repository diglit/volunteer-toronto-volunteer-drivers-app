import type { NextApiRequest, NextApiResponse } from 'next';

const mockDrivers = [
  {
    id: 1,
    name: 'Pam Lutz',
    email: '',
    licenceClass: ['A', 'G'],
    language: ['English', 'French'],
    vehicleType: 'Truck',
    policeCheck: 'Last 12 months',
    drivingAbstract: 'Last 12 months',
    willingToLift: 'Up to 50lbs',
    packingAndSorting: 'Yes',
    riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
  },
  {
    id: 2,
    name: 'Pam Lutz',
    email: '',
    licenceClass: ['A', 'G'],
    language: ['English', 'French'],
    vehicleType: 'Truck',
    policeCheck: 'Last 12 months',
    drivingAbstract: 'Last 12 months',
    willingToLift: 'Up to 50lbs',
    packingAndSorting: 'Yes',
    riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
  },
];
// eslint-disable-next-line
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: mockDrivers });
}
