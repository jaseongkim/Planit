import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
       --vh: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline : none;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
  }

  body {
    overflow: hidden;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
    }
  }

  button {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyle;
