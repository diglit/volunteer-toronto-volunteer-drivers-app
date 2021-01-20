import { Driver } from '../redux/driversSearch/index';

// mock driver information
export const createDriverInfo = (id: number, name = 'Pam Lutz', email?: string): Driver => ({
  id,
  name: name,
  email: email || '',
  licenceClass: 'A-Z',
  vehicleType: 'Truck',
  policeCheck: 'Last 12 months',
  drivingAbstract: 'Last 12 months',
  willingToLift: 'Up to 50lbs',
  packingAndSorting: 'Yes',
  riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
})