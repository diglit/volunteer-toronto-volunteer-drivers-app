import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';

import YourNeeds from './index';

import * as Redux from 'react-redux';
import { YourNeedsInfoFactory } from '../../../test-utils/factories';

const spyOnSelector = jest.spyOn(Redux, 'useSelector');

jest.mock('react-redux', () => {
  return Object.assign(jest.requireActual('react-redux'), {useDispatch: () => jest.fn()});
});

test('should render Personal Info slide first.', () => {
  spyOnSelector.mockImplementation((arg) => {
    const mockState = {
      driversRegistration: {
        yourNeeds: YourNeedsInfoFactory.build()
      }
    };
    return arg(mockState);
  });
  
  render(<YourNeeds />);

  expect(screen.getByLabelText('Downtown Toronto')).toBeChecked();
  expect(screen.getByLabelText('North York East (East of Yonge)')).toBeChecked();
  expect(screen.getByLabelText('Sunday 10 AM')).toBeChecked();
  expect(screen.getByLabelText('Contact-less Delivery')).toBeChecked();
});
