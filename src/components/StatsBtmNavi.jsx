// React
import React, { useState, useEffect } from "react";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
// UseParms
import { useLocation } from "react-router-dom";

const StatsBtmNavi = ({ name }) => {
  // Navigate
  const navigate = useNavigate();

  // Getting Component's URL name
  let currentPath = useLocation();

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

  return (
    <StyPeriodBtnWrap>
      <StyPeriodBtn
        className="statisticday"
        // page={currentPath.pathname}
        page={activeTabs}
        onClick={() => setActiveTabs("statisticday")}
      >
        Day
      </StyPeriodBtn>
      <StyPeriodBtn
        className="statisticweek"
        // page={currentPath.pathname}
        page={activeTabs}
        onClick={() => setActiveTabs("statisticweek")}
      >
        Week
      </StyPeriodBtn>
      <StyPeriodBtn
        className="statisticmonth"
        // page={currentPath.pathname}
        page={activeTabs}
        onClick={() => setActiveTabs("statisticmonth")}
      >
        Month
      </StyPeriodBtn>
      <StyPeriodBtn
        className="statisticyear"
        // page={currentPath.pathname}
        page={activeTabs}
        onClick={() => setActiveTabs("statisticyear")}
      >
        Year
      </StyPeriodBtn>
    </StyPeriodBtnWrap>
  );
};

export default StatsBtmNavi;

const StyPeriodBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`;

const StyPeriodBtn = styled.button`
  width: 60px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  background: transparent;
  border: none;
  opacity: 40%;

  ${(props) => {
    switch (props.page) {
      case "statisticday":
        return css`
          &.statisticday {
            font-weight: 500;
            opacity: 100%;
          }
        `;
      case "statisticweek":
        return css`
          &.statisticweek {
            font-weight: 500;
            opacity: 100%;
          }
        `;
      case "statisticmonth":
        return css`
          &.statisticmonth {
            font-weight: 500;
            opacity: 100%;
          }
        `;
      default:
        return css`
           &.statisticyear {
            font-weight: 500;
            opacity: 100%;
          }
      `;
    }
  }}
`;
