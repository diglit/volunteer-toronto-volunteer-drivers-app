import { Factory } from 'fishery';
import { PersonalInfoFormInput } from 'shared/redux/driverRegistration';
import { Driver } from '../redux/driversSearch/index';

// mock driver information
export const DriverFactory = Factory.define<Driver>(({ sequence }) => ({
  id: sequence,
  name: 'Pam Lutz',
  email: '',
  licenceClass: 'A-Z',
  vehicleType: 'Truck',
  policeCheck: 'Last 12 months',
  drivingAbstract: 'Last 12 months',
  willingToLift: 'Up to 50lbs',
  packingAndSorting: 'Yes',
  riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High Risk'],
}));

export const PersonalInfoInputFactory = Factory.define<PersonalInfoFormInput>(()=>({
  firstName: 'Pam',
  lastName: 'Lutz',
  email: 'pam@lutz.ca',
  phone: '4444444444',
  languages: [
    'english',
    'arabic'
  ]
}))