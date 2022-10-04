// React
import React, { useEffect,useContext } from "react";
// Styled-Component
import styled from "styled-components";
// React Icon
import { prev_icon, next_icon } from "../../static/images/";
// Context API
import { AppContext } from "../../context"

const YearMover = () => {

  // Context API : To get the selected date from the calendar
  const { dateValue, setDateValue, parsedYearDate } = useContext(AppContext);

  // Var: Getting a local current time
  // appending subtrack or add 1 year depending on which the button get clicked
  const currDate = new Date(dateValue);

  // When clicked, subtrack 1 from the current time
  const onClickLeft = () => {
    currDate.setFullYear(currDate.getFullYear() - 1);
    setDateValue(currDate);
  };

  // When clicked, add 1 from the current time
  const onClickRight = () => {
    currDate.setFullYear(currDate.getFullYear() + 1);
    setDateValue(currDate);
  };

    return (
        <StyYearCon>
        <button
          style={{ color: "rgba(177, 189, 207, 1)", marginRight: "5px" }}
          onClick={() => {
            onClickLeft();
          }}
        >
          <img src={prev_icon} alt="이전 아이콘 이미지" />
        </button>
        <div>{parsedYearDate}</div>
        <button
          style={{ color: "rgba(177, 189, 207, 1)", marginLeft: "5px" }}
          onClick={() => {
            onClickRight();
          }}
        >
          <img src={next_icon} alt="다음 아이콘 이미지" />
        </button>
      </StyYearCon>
    );
};

export default YearMover;


const StyYearCon = styled.div`
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