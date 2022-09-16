import React, { useState } from 'react';
import styled from "styled-components";
import {calendar_icon, bell_icon} from "../static/images";
import Burger from "./hamburNavi/Burger";
import Menu from "./hamburNavi/Menu";

const Header = () => {

  // Hook : opening burgar navi
  const [open, setOpen] = useState(false);

  const d = new Date();
  const date = d.getDate();
  const day = d.getDay();
  const month = d.getMonth()+1;

  const weekOfMonth = Math.ceil((date - 1 - day) / 7);

  // console.log("day is",day)
  // console.log("Month is",month)
  // console.log("WeekofMonth is", weekOfMonth)

  return (
    <HeaderCon>
      <h1>{localStorage.getItem("nickname")}</h1>
      <HeaderIcon>
        {/* <GoSearch></GoSearch> */}
        <CalendarBtn onClick={()=> alert("hello")}>
          <img src={calendar_icon} alt="calendar icon" />
        </CalendarBtn>
        <BellBtn>
          <img src={bell_icon} alt="bell icon" />
        </BellBtn>  
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
  position: sticky;
  top: 0;
  color: #fff;
  padding: 25px 20px;
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
  gap: 20px;

  button {
    background: transparent;
    border: none;
  }
`;

const CalendarBtn = styled.button`
  
`;

const BellBtn = styled.button``;