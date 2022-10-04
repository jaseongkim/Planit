// React
import React, { useState, useEffect } from "react";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const StatsBtmNavi = ({ name }) => {
  // Navigate
  const navigate = useNavigate();

  const pathname = window.location.pathname;

  console.log("pathname : ", pathname);

  // Hook : getting initial state from props & change state for the navigation
  // Depending on the state, the UX will be rendered differently
  const [activeTabs, setActiveTabs] = useState(name);

  useEffect(() => {
    switch (activeTabs) {
      case "statisticyear":
        navigate("/statisticyear");
        break;
      case "statisticweek":
        navigate("/statisticweek");
        break;
      case "statisticmonth":
        navigate("/statisticmonth");
        break;
      default:
        navigate("/statisticday");
        break;
    }
  }, [activeTabs, navigate]);

  console.log("111 : ", activeTabs);

  return (
    <StyPeriodBtnWrap>
      <button
        className="statisticday active"
        date={activeTabs}
        pathname={pathname}
        onClick={() => setActiveTabs("statisticday")}
      >
        Day
      </button>
      <button
        className="statisticweek"
        date={activeTabs}
        pathname={pathname}
        onClick={() => setActiveTabs("statisticweek")}
      >
        Week
      </button>
      <button
        className="statisticmonth"
        date={activeTabs}
        pathname={pathname}
        onClick={() => setActiveTabs("statisticmonth")}
      >
        Month
      </button>
      <button
        className="statisticyear"
        date={activeTabs}
        pathname={pathname}
        onClick={() => setActiveTabs("statisticyear")}
      >
        Year
      </button>
    </StyPeriodBtnWrap>
  );
};

export default StatsBtmNavi;

const StyPeriodBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  button {
    width: 60px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    background: transparent;
    border: none;
    opacity: 40%;

    &.active {
      font-weight: 500;
      opacity: 100%;
    }
  }
`;
