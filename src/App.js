import "./App.css";
// React 
import React, { useState } from 'react';
// React Component
import Browser from "./shared/Browser";
// GlobalStyle
import GlobalStyle from "./shared/GlobalStyle";
// Context API
import { AppContext } from './context';

function App() {

  // Hook : opening burgar navi
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
