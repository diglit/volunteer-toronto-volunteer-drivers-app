import React from 'react';
import { DriverCard } from './index';

import { Driver } from '../../../../redux/driversSearch/index';

import { DriverFactory } from '../../../../test-utils/factories';
import { render, screen } from '@testing-library/react';

const driverInfo: Driver = DriverFactory.build();

test('displays the information of a driver', () => {
  render(<DriverCard driverInfo={driverInfo} />);

  expect(screen.getByRole("driverName").textContent).toBe('Pam Lutz');
})