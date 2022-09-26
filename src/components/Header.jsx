// React 
import React, { useState, useEffect } from 'react';
// Styled Component
import styled from "styled-components";
// Icon imgs
import {calendar_icon, bell_icon,planet_icon} from "../static/images/";
// Hamburger Navi
import Burger from "./hamburNavi/Burger";
import Menu from "./hamburNavi/Menu";
// UseParms
import { useLocation } from "react-router-dom";

const Header = ({showCalendar,setShowCalendar }) => {

  let currentPath = useLocation();

  // Hook : opening burgar navi
  const [open, setOpen] = useState(false);

  return (
    <HeaderCon>
      <h1>{localStorage.getItem("nickname")}</h1>
      <HeaderIcon>
        {/* <GoSearch></GoSearch> */}
        <button onClick={()=> {setShowCalendar(!showCalendar)}}>
          <img src={showCalendar ? planet_icon : calendar_icon} alt="calendar icon" />
        </button>
        <button>
          <img src={bell_icon} alt="bell icon" />
        </button>  
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </HeaderIcon>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: sticky;
  // top: 0;
  width: 100%;
  max-width: 375px;
  padding: 16px;
  // background: ${({scrollY}) => scrollY > 0 ? '#121212' : 'transparent'};
  color: #fff;
  z-index: 999;

  h1 {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 0;
  }
`;
const HeaderIcon = styled.div`
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 5px;

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