import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";
import Brower from "./shared/Brower";
import GlobalStyle from "./shared/GlobalStyle";
import Mobile from "./shared/Mobile";
import { ThemeProvider } from 'styled-components';
import { theme } from "./shared/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyle />
      <BrowserView>
        <Brower />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
      </>
    </ThemeProvider>
  );
}

export default App;
