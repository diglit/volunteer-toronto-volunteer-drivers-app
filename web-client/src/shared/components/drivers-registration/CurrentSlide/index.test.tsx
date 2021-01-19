import { render } from '@testing-library/react';
import React from 'react';

import CurrentSlide from './index';

describe('Current Slide', () => {
  test('should render Personal Info slide first.', () => {
    const { getByText } = render(<CurrentSlide currentSlide={1}/>);

    const firstNameLabel = getByText('First Name');

    expect(firstNameLabel).toBeInTheDocument;
  });

  //tests for each sub-slide should follow, above test should be improved upon when these slides are updated
});