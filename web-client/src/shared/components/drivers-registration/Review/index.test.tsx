import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { act } from 'react-dom/test-utils';
import UserEvent from '@testing-library/user-event';

import ReviewSection from './index';

import * as Redux from 'react-redux';
import { PersonalInfoInputFactory, YourNeedsInfoFactory, PreScreenInfoFactory, AgreementInfoFactory } from '../../../test-utils/factories';

const spyOnSelector = jest.spyOn(Redux, 'useSelector');

describe('render review section', () => {
  spyOnSelector.mockImplementation((arg) => {
    const mockState = {
      driversRegistration: {
        personalInfo: PersonalInfoInputFactory.build(),
        yourNeeds: YourNeedsInfoFactory.build(),
        preScreen: PreScreenInfoFactory.build(),
        agreement: AgreementInfoFactory.build()
      }
    };
    return arg(mockState);
  });

  beforeEach(() => render(<ReviewSection />));

  test('check if all information on the personal info section has been rendered', () => {
    expect(screen.getByDisplayValue('Beesly')).toBeInTheDocument;
    expect(screen.getByDisplayValue('Pam')).toBeInTheDocument;
    expect(screen.getByDisplayValue('pam@beesly.ca')).toBeInTheDocument;
    expect(screen.getByDisplayValue('4444444444')).toBeInTheDocument;
    expect(screen.getByLabelText('english')).toBeChecked();
    expect(screen.getByLabelText('french')).toBeChecked();
    expect(screen.getByLabelText('tagalog')).toBeChecked();
    expect(screen.getByLabelText('portuguese')).toBeChecked();
    expect(screen.getByLabelText('spanish')).toBeChecked();
    expect(screen.getByLabelText('chinese')).toBeChecked();
    expect(screen.getByLabelText('other')).toBeChecked();
    expect(screen.getByDisplayValue('Arabic')).toBeInTheDocument;
  });

  test('check if all information on the your needs section has been rendered', () => {
    expect(screen.getByLabelText('Downtown Toronto')).toBeChecked();
    expect(screen.getByLabelText('North York East (East of Yonge)')).toBeChecked();
    expect(screen.getByLabelText('Sunday 10 AM')).toBeChecked();
    expect(screen.getByLabelText('Contact-less Delivery')).toBeChecked();
  });

  test('check if all information on the pre-screen section has been rendered', () => {
    expect(screen.getByLabelText('I have completed a police records check in the last 6 months')).toBeChecked();
    expect(screen.getByDisplayValue('2021-01-01')).toBeInTheDocument;
    expect(screen.getByDisplayValue('Criminal Record Checks')).toBeInTheDocument;
    expect(screen.getByLabelText('I have a clear driving abstract completed within the last 6 months')).toBeChecked();
    expect(screen.getByDisplayValue('2021-01-02')).toBeInTheDocument;
    expect(screen.getByLabelText('I have access to a car that is safe to drive for deliveries')).toBeChecked();
    expect(screen.getByDisplayValue('A')).toBeInTheDocument;
  });

  test('check if all information on the agreements section has been rendered', () => {
    expect(screen.getByLabelText('I understand the Volunteer Toronto will provide my information to the non-profit organization that best matches my profile')).toBeChecked();
    expect(screen.getByLabelText('I understand that I will still be required to complete screening steps outlined by the organization I am reffered to')).toBeChecked();
    expect(screen.getByLabelText('I expect to receive contact from my matched organization within 2 weeks')).toBeChecked();
    expect(screen.getByLabelText('I agree to complete a follow-up evaluation of my experience in this Matching Program')).toBeChecked();
    expect(screen.getByDisplayValue('Pam Beesly')).toBeInTheDocument;
  });

  test('clicking should not work', async () => {

    const agreementOption = screen.getByLabelText('I expect to receive contact from my matched organization within 2 weeks');
    const packOption = screen.getByLabelText('Packing and/sorting items for delivery');

    await act(async () => {
      UserEvent.click(agreementOption);
      UserEvent.click(packOption);
    });

    expect(agreementOption).toBeChecked();
    expect(packOption).not.toBeChecked();
  });
  
});