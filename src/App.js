import "./App.css";
// React
import React, { useState, useEffect } from "react";
// React Component
import Browser from "./shared/Browser";
// GlobalStyle
import GlobalStyle from "./shared/GlobalStyle";
// Context API
import { AppContext } from "./context";
import useGaTracker from "./shared/useGaTracker";

function App() {
  // Hook : opening burgar navi

  useGaTracker();

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppContext.Provider value={{ open, setOpen }}>
        <GlobalStyle />
        <Browser />
      </AppContext.Provider>
    </>
  );
}

export default App;
