import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  &:root {
    /* Colors */
    --primary: #050505;
    --secondary: #454545;
    --brand: #FF4136;
    --brand-secondary: #ff6026;

    /* Fonts */
    --sans: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--sans);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
