import { Factory } from 'fishery';
import { PersonalInfo } from 'shared/redux/driversRegistration';
import { DriverApplication } from 'shared/redux/volunnteer-toronto/driverApplications';
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

export const PersonalInfoInputFactory = Factory.define<PersonalInfo>(()=>({
  firstName: 'Pam',
  lastName: 'Beesly',
  emailAddress: 'pam@beesly.ca',
  phoneNumber: '4444444444',
  languagesSpoken: {
      english: true,
      french: true,
      tagalog: true,
      portuguese: true,
      spanish: true,
      chinese: true,
      other: true,
  },
  languageOther: 'Arabic',
}))

export const DriverApplicationFactory = Factory.define<DriverApplication>(({ sequence })=> ({
    id: sequence,
    application: {
        lastName: 'Smith',
        firstName: 'John',
    },
    rejected: false,
    approved: false,
    comment: '',
    applicationDate: '2021-3-30'
}))