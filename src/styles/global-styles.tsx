import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui;
    font-size: 15px;
    width: 100%;
  }

  a,
  button {
    cursor: pointer;
  }

  a,
  a:hover,
  a:active {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 1.5em;
  }

  span {
    display: inline-block;
  }
`;
export default GlobalStyles;
