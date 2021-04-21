import { Factory } from 'fishery';
import { PersonalInfo, PreScreen, Agreement } from '../redux/driversRegistration';
import { YourNeeds } from '../redux/driversRegistration/yourNeeds/index';
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
}));

export const YourNeedsInfoFactory = Factory.define<YourNeeds>(() => ({
  communities: ['Downtown Toronto', 'North York East (East of Yonge)'],
  availableDates: [
    { date: 'Sunday', availableTimes: ['10 AM'] },
    { date: 'Monday', availableTimes: [] },
    { date: 'Tuesday', availableTimes: [] },
    { date: 'Wednesday', availableTimes: [] },
    { date: 'Thursday', availableTimes: [] },
    { date: 'Friday', availableTimes: [] },
    { date: 'Saturday', availableTimes: [] }
  ],
  typesOfDelivery: ['Contact-less Delivery']
}));

export const PreScreenInfoFactory = Factory.define<PreScreen>(() => ({
  policeRecordsCheckOptions: 'I have completed a police records check in the last 6 months',
  policeRecordsCheckDate: '2021-01-01',
  policeRecordsCheckType: 'Criminal Record Checks',
  drivingAbstractOptions: 'I have a clear driving abstract completed within the last 6 months',
  drivingAbstractDate: '2021-01-02',
  LicenseAndVehicle: {
    haveCar: true,
    haveVan: false,
    haveGLicense: false,
    have1MInsurance: false,
    have2MInsurance: false
  },
  LicenseClasses: 'A'
}));

export const AgreementInfoFactory = Factory.define<Agreement>(() => ({
  agreementOptions: {
    agreement1: true,
    agreement2: true,
    agreement3: true,
    agreement4: true
  },
  signiture: 'Pam Beesly'
}));