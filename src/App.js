import { BrowserView, MobileView } from "react-device-detect";
import "./App.css";
import Brower from "./shared/Brower";
import GlobalStyle from "./shared/GlobalStyle";
import Mobile from "./shared/Mobile";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserView>
        <Brower />
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
}

export default App;
