import { createGlobalStyle } from "styled-components";
import "../static/fonts/font.css";

const GlobalStyle = createGlobalStyle`

  :root {
       --vh: 100%;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline : none;
    font-family: 'PretendardVariable', sans-serif;
    font-weight: 500;

    // 스크롤바 없애기
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome , Safari , Opera */
    
  }
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
    font-family: 'PretendardVariable', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyle;
