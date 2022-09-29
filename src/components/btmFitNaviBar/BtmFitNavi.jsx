// React
import React, { useState, useEffect } from "react";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// Styled-Component
import styled, { css } from "styled-components";

const BtmFitNavi = ({ name, wkPlanets }) => {
  // Navigate
  const navigate = useNavigate();

  // Hook : getting initial state from props & change state for the navigation
  // Depending on the state, the UX will be rendered differently
  const [activeTabs, setActiveTabs] = useState(name);

  // UseEffect : when activeTabs get changed, useEffect will be triggered again
  useEffect(() => {
    switch (activeTabs) {
      case "WklyTodo":
        navigate("/WklyTodo");
        break;
      default:
        navigate("/dlytodo");
        break;
    }
  }, [activeTabs]);

  // When the day navi btn get clicked, find current date's planet
  // If the planet's planetType is 0, navigate to creatplanet page
  // Else navigate to dlytodo page
  const onClickDay = () => {
    console.log("Checking wkPlanets", wkPlanets);
    const currDate = new Date();
    const parsedCurrDate = `${currDate.getFullYear()}-${String(
      currDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currDate.getDate()).padStart(2, "0")}`;
    const currPlanet = wkPlanets?.planets.find(
      (planet) => planet.dueDate === parsedCurrDate
    );

    if (currPlanet?.planetType === null || currPlanet?.planetType === 0) {
      navigate("/createplanet");
    } else {
      setActiveTabs("dlytodo");
    }
  };

  return (
    <StyBtmNavi>
      <StyBtmTabCont>
        <StyBtmTabWrap>
          <StyBtmTab
            className="week"
            date={activeTabs}
            onClick={() => setActiveTabs("WklyTodo")}
          >
            Week
          </StyBtmTab>
          <StyBtmTab
            className="day"
            date={activeTabs}
            onClick={() => onClickDay()}
          >
            Day
          </StyBtmTab>
        </StyBtmTabWrap>
      </StyBtmTabCont>
    </StyBtmNavi>
  );
};

export default BtmFitNavi;

const StyBtmNavi = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  max-width: 375px;
  width: 100%;
  /* 비율 조정 할 것 */
  /* background: linear-gradient(
    0deg,
    #2e5c97 0%,
    #2e5c97 50%,
    rgba(75, 145, 240, 0) 90%
  ); */
  background: linear-gradient(
    0deg,
    #acd0fd 0%,
    #5899f2 75%,
    rgba(75, 145, 240, 0) 100%
  );

  @media (max-width: 425px) {
    max-width: none;
  }
`;
const StyBtmTabCont = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 50px 16px 32px;
`;

const StyBtmTabWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.5px;
  /* background: #95b1e689; */
  background: rgba(56, 106, 202, 0.4);
  border-radius: 10px;
`;

const StyBtmTab = styled.div`
  ${(props) => {
    switch (props.date) {
      case "dlytodo":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 35px;
          border-radius: 8px;

          &.day {
            background: white;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12),
              0px 3px 1px rgba(0, 0, 0, 0.04);
          }
        `;
      default:
        return css`
          width: 50%;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;

          &.week {
            background: white;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12),
              0px 3px 1px rgba(0, 0, 0, 0.04);
          }
        `;
    }
  }}
`;
