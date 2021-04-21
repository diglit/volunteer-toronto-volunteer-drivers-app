import { render } from '@testing-library/react';
import React from 'react';
import { getServerSideProps } from 'pages/index';
import IndexPage from 'pages/index';

describe('Index Page', () => {
  test('should render a welcome message', () => {
    const { getByText } = render(<IndexPage />);

    const title = getByText('Lightly Opinionated Next App Starter');

    expect(title).toBeInTheDocument;
  });

  test('should return redirect if user is not found', async () => {
    const response = await getServerSideProps();
    expect(response).toEqual(
      expect.objectContaining({
        redirect: {
          permanent: false,
          destination: '/signin'
        }
      })
    );
  });

});
