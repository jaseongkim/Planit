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

  // Google Analytics
  useGaTracker();

  // Hook for opening side navigation
  const [open, setOpen] = useState(false);

  // Hook : To get the selected date from the calendar
  const [dateValue, setDateValue] = useState(new Date());

  // Var ; A Parsed date in format yyyy/mm/dd from the calendar
  var parsedFullDate = `${dateValue.getFullYear()}-${String(
    dateValue.getMonth() + 1
  ).padStart(2, "0")}-${String(dateValue.getDate()).padStart(2, "0")}`;

   // Var : A Parsed date in format mm월 dd일 from the calendar
   var parsedDayDate = `${String(dateValue.getMonth() + 1).padStart(2, "0")}월 ${String(
    dateValue.getDate()
  ).padStart(2, "0")}일`;

  return (
    <>
      <AppContext.Provider value={{ open, setOpen, dateValue, setDateValue, parsedFullDate, parsedDayDate }}>
        <GlobalStyle />
        <Browser />
      </AppContext.Provider>
    </>
  );
}

export default App;
