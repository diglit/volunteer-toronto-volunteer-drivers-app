import { rest } from 'msw'

const mockDrivers = [
  {
    id: 1,
    name: 'Pam Lutz',
    email: '',
    licenceClass: 'A-Z',
    vehicleType: 'Truck',
    policeCheck: 'Last 12 months',
    drivingAbstract: 'Last 12 months',
    willingToLift: 'Up to 50lbs',
    packingAndSorting: 'Yes',
    riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
  },
  {
    id: 1,
    name: 'Pam Lutz',
    email: '',
    licenceClass: 'A-Z',
    vehicleType: 'Truck',
    policeCheck: 'Last 12 months',
    drivingAbstract: 'Last 12 months',
    willingToLift: 'Up to 50lbs',
    packingAndSorting: 'Yes',
    riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
  }
]

export const handlers = [
  rest.post('/drivers', (req, res, ctx) => {
    console.log(req.body, 'this is the request body (drivers filters)');
    return res(
      ctx.delay(500),
      ctx.status(202, 'Mocked status'),
      ctx.json({
        // data: req.body
        data: mockDrivers
      }),
    )
  }),

]