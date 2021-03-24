import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import DriverRegistration from '../../../../pages/drivers-registration';
import { store } from '../../../redux';

describe('Personal Info', () => {

  test('should allow users to enter their first name.', () => {
    const screen = render(<Provider store={store}><DriverRegistration /></Provider>);
    const firstNameInput = screen.getByLabelText('first-name') as HTMLInputElement;
    if (firstNameInput === null) return;

    fireEvent.change(firstNameInput, {target: {value: 'Jonathan'}});

    expect(firstNameInput.value).toEqual('Jonathan')
  });

  test('should allow users to enter their last name.', () => {
    const screen = render(<Provider store={store}><DriverRegistration /></Provider>);
    const lastNameInput = screen.getByLabelText('last-name')  as HTMLInputElement;

    fireEvent.change(lastNameInput, {target: {value: 'Saunders'}});

    expect(lastNameInput.value).toEqual('Saunders');
  });

  test('should allow users to enter their email.', () => {
    const screen = render(<Provider store={store}><DriverRegistration /></Provider>);
    const emailInput = screen.getByLabelText('email')  as HTMLInputElement;

    fireEvent.change(emailInput, {target: {value: 'jsaunders@gmail.com'}});

    expect(emailInput.value).toEqual('jsaunders@gmail.com');
  });

  test('should allow users to enter their phone number.', () => {
    const screen = render(<Provider store={store}><DriverRegistration /></Provider>);
    const phoneNumberInput = screen.getByLabelText('phone-number')  as HTMLInputElement;

    fireEvent.change(phoneNumberInput, {target: {value: 2805284619}});

    expect(Number.parseInt(phoneNumberInput.value)).toEqual(2805284619)
  });
  
  test('should allow users to select languages spoken.', () => {
    const screen = render(<Provider store={store}><DriverRegistration /></Provider>);
    const englishCheckBox = screen.getByLabelText('languagesSpoken-english') as HTMLInputElement;
    const chineseCheckBox = screen.getByLabelText('languagesSpoken-chinese') as HTMLInputElement;

    expect(englishCheckBox.checked).toEqual(false);
    expect(chineseCheckBox.checked).toEqual(false);

    fireEvent(englishCheckBox, new MouseEvent('click'));
    fireEvent(chineseCheckBox, new MouseEvent('click'));

    expect(englishCheckBox.checked).toEqual(true);
    expect(chineseCheckBox.checked).toEqual(true);

  });

  test('should allow users to deselect languages spoken.', () => {
    const screen = render(<Provider store={store}><DriverRegistration /></Provider>);
    const englishCheckBox = screen.getByLabelText('languagesSpoken-english') as HTMLInputElement;

    expect(englishCheckBox.checked).toEqual(false);

    fireEvent(englishCheckBox, new MouseEvent('click'));
    fireEvent(englishCheckBox, new MouseEvent('click'));

    expect(englishCheckBox.checked).toEqual(false);
    
  });

});