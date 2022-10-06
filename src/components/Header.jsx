// React
import React, { useContext } from "react";
// Styled Component
import styled from "styled-components";
// Icon imgs
import { calendar_icon, planet_icon } from "../static/images/";
// Hamburger Navi
import Burger from "./hamburNavi/Burger";
// UseParms
import { useLocation } from "react-router-dom";
// Context API
import { AppContext } from "../context";

const Header = ({ showCalendar, setShowCalendar }) => {
  // Getting Component's URL name
  let currentPath = useLocation();

  // Context API : opening & closing burgar navi
  const { open, setOpen } = useContext(AppContext);

  return (
    <HeaderCon id="header">
      <h1>{localStorage.getItem("nickname")}</h1>
      <HeaderIcon>
        {currentPath.pathname === "/wklytodo" ? null : (
          <button
            onClick={() => {
              setShowCalendar(!showCalendar);
            }}
          >
            <img
              src={showCalendar ? planet_icon : calendar_icon}
              alt="calendar icon"
            />
          </button>
        )}
        {/* <button>
          <img src={bell_icon} alt="bell icon" />
        </button> */}
        <Burger open={open} setOpen={setOpen} />
      </HeaderIcon>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  padding: 16px;
  color: #fff;
  z-index: 999;

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 0;
    padding-left: 4px;
  }
`;
const HeaderIcon = styled.div`
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 13px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: transparent;
    border: none;
  }
`;
