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

  // Var : A Parsed date in format yyyy월 mm월 from the calendar
  var parsedMonthDate = `${dateValue.getFullYear()} ${String(dateValue.getMonth() + 1).padStart(2, "0")}월`;

  // Var : A Parsed date in format yyyy월 from the calendar
  var parsedYearDate = `${dateValue.getFullYear()}`;

  // Getting a week of month from a given monday date
  // This source code is from https://falsy.me/javascript-입력한-날짜의-해당-달-기준-주차-구하기/
  function weekNumberByMonth(dateFormat) {
    const inputDate = new Date(dateFormat);

    let year = inputDate.getFullYear();
    let month = inputDate.getMonth() + 1;

    const weekNumberByThurFnc = (paramDate) => {
      const year = paramDate.getFullYear();
      const month = paramDate.getMonth();
      const date = paramDate.getDate();

      const firstDate = new Date(year, month, 1);
      const lastDate = new Date(year, month + 1, 0);
      const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
      const lastDayOfweek = lastDate.getDay();

      const lastDay = lastDate.getDate();

      const firstWeekCheck =
        firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;

      const lastWeekCheck =
        lastDayOfweek === 1 || lastDayOfweek === 2 || lastDayOfweek === 3;

      const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);

      let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7);

      if (weekNo === 1 && firstWeekCheck) weekNo = "prev";
      else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = "next";
      else if (firstWeekCheck) weekNo = weekNo - 1;

      return weekNo;
    };

    let weekNo = weekNumberByThurFnc(inputDate);

    if (weekNo === "prev") {
      const afterDate = new Date(year, month - 1, 0);
      year = month === 1 ? year - 1 : year;
      month = month === 1 ? 12 : month - 1;
      weekNo = weekNumberByThurFnc(afterDate);
    }
    if (weekNo === "next") {
      year = month === 12 ? year + 1 : year;
      month = month === 12 ? 1 : month + 1;
      weekNo = 1;
    }

    return { year, month, weekNo };
  }
  
    // Getting Monday of the week with a given date
    const getMondayOfWeek = (date) => {
      const first =
        date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
      const monday = new Date(date.setDate(first));
  
      return monday;
    };

  return (
    <>
      <AppContext.Provider value={{ 
        open, setOpen, dateValue, setDateValue, parsedFullDate, parsedDayDate,
        getMondayOfWeek, weekNumberByMonth, parsedMonthDate, parsedYearDate
        }}>
        <GlobalStyle />
        <Browser />
      </AppContext.Provider>
    </>
  );
}

export default App;
