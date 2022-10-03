// React
import React from "react";
// Styled-Component
import styled from "styled-components";
// React Icon
import { prev_icon, next_icon } from "../../static/images/";

const DayMover = ({ parsedParDate, setDateValue, dateValue }) => {
  // Var: Getting a local current time
  // appending subtrack or add 1 day depending on which the button get clicked
  const currDate = new Date(dateValue);

  // When clicked, subtrack 1 from the current time
  const onClickLeft = () => {
    currDate.setDate(currDate.getDate() - 1);
    setDateValue(currDate);
  };

  // When clicked, add 1 from the current time
  const onClickRight = () => {
    currDate.setDate(currDate.getDate() + 1);
    setDateValue(currDate);
  };

  return (
    <StyDayCon>
      <button
        className="arrow"
        style={{ color: "rgba(177, 189, 207, 1)", marginRight: "5px" }}
        onClick={() => {
          onClickLeft();
        }}
      >
        <img src={prev_icon} alt="이전 아이콘 이미지" />
      </button>
      <div>{parsedParDate}</div>
      <button
        className="arrow"
        style={{ color: "rgba(177, 189, 207, 1)", marginLeft: "5px" }}
        onClick={() => {
          onClickRight();
        }}
      >
        <img src={next_icon} alt="다음 아이콘 이미지" />
      </button>
    </StyDayCon>
  );
};

export default DayMover;

const StyDayCon = styled.div`
  display: flex;
  color: white;
  align-items: center;
  display: flex;
  align-items: center;

  div {
    line-height: 1;
    font-size: 18px;
    color: #fff;
    margin: 0 10px;
  }

  button {
    width: 24px;
    height: 24px;
    color: #fff;
    margin: 0 !important;
    background: transparent;
    border: none;
  }
`;
