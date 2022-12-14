// React
import React, {useContext } from "react";
// Styled-Component
import styled from "styled-components";
import { prev_icon, next_icon } from "../../static/images/";
// Context API
import { AppContext } from "../../context";

const WeekMover = () => {
  
  // Context API : To get the selected date && the parsedMondayOfWeekDate from the calendar
  const { dateValue, setDateValue, getMondayOfWeek, weekNumberByMonth} = useContext(AppContext);

  // Var ; A parsed date in format yy년 mm월 dd째주 to display on the WeekMover
  const parsedWeekOfMonthDate = `${weekNumberByMonth(dateValue).month}월 
  ${weekNumberByMonth(getMondayOfWeek(dateValue)).weekNo}째주`;

  // Var: Getting a local current time
  // appending subtrack or add 1 week depending on which the button get clicked
  const currDate = new Date(dateValue);

  // When clicked, subtrack 1 from the current time
  const onClickLeft = () => {
    currDate.setDate(currDate.getDate() - 7);
    setDateValue(currDate);
  };

  // When clicked, add 1 from the current time
  const onClickRight = () => {
    currDate.setDate(currDate.getDate() + 7);
    setDateValue(currDate);
  };

  return (
    <StyWeekCon>
      <button
        style={{ color: "rgba(177, 189, 207, 1)", marginRight: "5px" }}
        onClick={() => {
          onClickLeft();
        }}
      >
        <img src={prev_icon} alt="이전 아이콘 이미지" />
      </button>
      <div>{parsedWeekOfMonthDate}</div>
      <button
        style={{ color: "rgba(177, 189, 207, 1)", marginLeft: "5px" }}
        onClick={() => {
          onClickRight();
        }}
      >
        <img src={next_icon} alt="다음 아이콘 이미지" />
      </button>
    </StyWeekCon>
  );
};

export default WeekMover;

const StyWeekCon = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  align-items: center;

  div {
    line-height: 1;
    font-size: 18px;
    margin: 0 10px;
  }

  button {
    width: 24px;
    height: 24px;
    margin: 0 !important;
    background: transparent;
    border: none;
  }
`;
