import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
       --vh: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    text-decoration: none;
    outline : none;
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    overflow: hidden;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
