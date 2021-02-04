import React from 'react';
import { DriverCard } from './index';

import { Driver } from '../../../../redux/driversSearch/index';

import { DriverFactory } from '../../../../test-utils/factories';
import { render, screen } from '@testing-library/react';

const driverInfo: Driver = DriverFactory.build();

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