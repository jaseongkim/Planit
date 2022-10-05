// React
import React, { useState, useEffect } from "react";
// React-Router-Dom
import { useNavigate, useLocation } from "react-router-dom";
// Styled-Component
import styled, { css } from "styled-components";
import TopButton from "../../element/TopButton";

const RepStatsBtmFitNavi = () => {
  // Navigate
  const navigate = useNavigate();

  // Getting Component's URL name
  let currentPath = useLocation();

  // Hook : getting initial state from props & change state for the navigation
  // Depending on the state, the UX will be rendered differently
  const [activeTabs, setActiveTabs] = useState(currentPath.pathname);

  // UseEffect : when activeTabs get changed, useEffect will be triggered again
  useEffect(() => {
    switch (activeTabs) {
      case "/report":
        navigate("/report");
        break;
      case "/statisticyear":
        navigate("/statisticyear");
        break;
      case "/statisticweek":
        navigate("/statisticweek");
        break;
      case "/statisticmonth":
        navigate("/statisticmonth");
        break;
      default:
        navigate("/statisticday");
        break;
    }
  }, [activeTabs, navigate]);

  return (
    <StyBtmNavi>
      {currentPath.pathname === "/report" ? <TopButton /> : null}
      <StyBtmTabCont>
        <StyBtmTabWrap>
          <StyBtmTab
            className="rep"
            page={activeTabs}
            onClick={() => setActiveTabs("/report")}
          >
            리포트로 보기
          </StyBtmTab>
          <StyBtmTab
            className="stats"
            page={activeTabs}
            onClick={() => setActiveTabs("/statisticday")}
          >
            통계로 보기
          </StyBtmTab>
        </StyBtmTabWrap>
      </StyBtmTabCont>
    </StyBtmNavi>
  );
};

export default RepStatsBtmFitNavi;

const StyBtmNavi = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  max-width: 375px;
  width: 100%;

  @media (max-width: 425px) {
    max-width: none;
  }
`;
const StyBtmTabCont = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 16px 32px;
`;

const StyBtmTabWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.5px;
  background: rgba(56, 106, 202, 0.4);
  border-radius: 10px;
`;

const StyBtmTab = styled.button`
  ${(props) => {
    switch (props.page) {
      case "/report":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 35px;
          background: transparent;
          border: none;
          border-radius: 8px;

          &.rep {
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
          background: transparent;
          border: none;
          border-radius: 8px;

          &.stats {
            background: white;
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12),
              0px 3px 1px rgba(0, 0, 0, 0.04);
          }
        `;
    }
  }}
`;
