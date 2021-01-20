import React from 'react';
import { DriverCard } from './index';
import DriversSearchList from './index';
import { createDriverInfo } from '../../../test-utils/mock-function';

import { render, screen } from '@testing-library/react';

import * as Redux from 'react-redux';
import { Driver } from '../../../redux/driversSearch/index';

const driverInfo: Driver = createDriverInfo(1);

// create a driver list with 3 mock driver data
const driversList: Driver[] = [createDriverInfo(1), createDriverInfo(2), createDriverInfo(3)];

test('displays the information of a driver', () => {
  render(<DriverCard driverInfo={driverInfo} />);

  expect(screen.getByRole("driverName").textContent).toBe('Pam Lutz');
  expect(screen.getByRole("licenceClass").textContent).toBe('A-Z');
  expect(screen.getByRole("vehicleType").textContent).toBe('Truck');
  expect(screen.getByRole("policeCheck").textContent).toBe('Last 12 months');
  expect(screen.getByRole("drivingAbstract").textContent).toBe('Last 12 months');
  expect(screen.getByRole("willingToLift").textContent).toBe('Up to 50lbs');
  expect(screen.getByRole("packingAndSorting").textContent).toBe('Yes');
  expect(screen.getAllByRole("riskComfortItem")).toHaveLength(3);
})

const spyOnSelector = jest.spyOn(Redux, 'useSelector');

test('shows the driver list', () => {
  spyOnSelector.mockImplementation(() => driversList)
  render(<DriversSearchList />);
  expect(screen.getAllByRole('driverCard')).toHaveLength(3);
})
