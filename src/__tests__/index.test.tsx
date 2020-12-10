import { render } from '@testing-library/react';
import React from 'react';

import IndexPage from 'pages/index';

describe('Index Page', () => {
  test('should render a welcome message', () => {
    const { getByText } = render(<IndexPage />);

    const title = getByText(/welcome/i);

    expect(title).toBeInTheDocument;
  });
});
