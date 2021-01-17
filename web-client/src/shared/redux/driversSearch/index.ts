import { createSlice } from '@reduxjs/toolkit';
export interface Driver {
  id: number;
  name: string;
  licenceClass: string;
  vehicleType: string;
  policeCheck: string;
  drivingAbstract: string;
  willingToLift: string;
  packingAndSorting: string;
  riskComfortLevel: string[];
}

export interface DriversSearch {
  drivers: Driver[];
}

// make a mock driver data as per design
const mockDriverData: Driver = {
  id: 1,
  name: 'Pam Lutz',
  licenceClass: 'A-Z',
  vehicleType: 'Truck',
  policeCheck: 'Last 12 months',
  drivingAbstract: 'Last 12 months',
  willingToLift: 'Up to 50lbs',
  packingAndSorting: 'Yes',
  riskComfortLevel: ['Contactless Deliveries', 'Low Risk', 'High RIsk'],
}

const initialState: DriversSearch = {
  drivers: [mockDriverData],
}

const driversSearchSlice = createSlice({
  name: 'driversSearch',
  initialState,
  reducers: {
    increment: state => state,
    decrement: state => state
  }
})

export default driversSearchSlice