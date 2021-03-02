import React from 'react';

import DriversSearchList from './index';
import { DriverFactory } from '../../../test-utils/factories';

import { render, screen } from '@testing-library/react';

import * as Redux from 'react-redux';
import { Driver } from '../../../redux/driversSearch/index';

// create a driver list with 3 mock driver data
const driversList: Driver[] = [DriverFactory.build(), DriverFactory.build(), DriverFactory.build({name: 'Simon'})];

const spyOnSelector = jest.spyOn(Redux, 'useSelector');

test('Driver needs to be able select at most 1 police check option', () => {
  spyOnSelector.mockImplementation(() => driversList)
  render(<DriversSearchList />);
  expect(screen.getAllByRole('driverCard')).toHaveLength(3);
})
