import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
<<<<<<< HEAD
=======
import { store } from '../../../redux';
>>>>>>> develop

import { store } from 'shared/redux';
import CurrentSlide from './index';

describe('Current Slide', () => {
  test('should render Personal Info slide first.', () => {
<<<<<<< HEAD
    const { getByText } = render(<Provider store={store}><CurrentSlide currentSlide={1}/></Provider>);
=======
    const { getByText } = render(<Provider store={store}><CurrentSlide currentSlide={1} /></Provider>);
>>>>>>> develop

    const firstNameLabel = getByText('First Name');

    expect(firstNameLabel).toBeInTheDocument;
  });

  //tests for each sub-slide should follow, above test should be improved upon when these slides are updated
});