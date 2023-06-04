import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: #32476f;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
