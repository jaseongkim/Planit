import React from "react";

// Styled-Component
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const WeekMover = ({ parsedDispDate, dateValue, setDateValue }) => {
  // Var: Getting a local current time
  // appending subtrack or add 1 week depending on which the button get clicked
  const currDate = new Date(dateValue);

  console.log("Checking dateValue", currDate)

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
      <button>
        <AiOutlineLeft
          className="arrow"
          style={{ color: "rgba(177, 189, 207, 1)", marginRight: "5px" }}
          onClick={() => {
            onClickLeft();
          }}
        />
      </button>
      <div>{parsedDispDate}</div>
      <button>
        <AiOutlineRight
          className="arrow"
          style={{ color: "rgba(177, 189, 207, 1)", marginLeft: "5px" }}
          onClick={() => {
            onClickRight();
          }}
        />
      </button>
    </StyWeekCon>
  );
};

export default WeekMover;

const StyWeekCon = styled.div`
  width: 300px;
  display: flex;
  color: white;
  align-items: center;

  button {
    background: transparent;
    border: none;
  }
`;
