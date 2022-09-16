import React, { useState } from 'react';
import styled from "styled-components";
import { GoSearch, GoBell } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import {BsCalendar3} from "react-icons/bs"
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
      <h1>{month}월 {weekOfMonth}째주</h1>
      <HeaderIcon>
        {/* <GoSearch></GoSearch> */}
        <BsCalendar3
          onClick={()=> alert("hello")}
        >
        </BsCalendar3>
        <GoBell></GoBell>
        {/* Hamburger Navi */}
        
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </HeaderIcon>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 999;
  padding: 4% 4% 2% 4%;
  display: flex;
  justify-content: space-between;
`;
const HeaderIcon = styled.div`
  font-size: 23px;
  display: flex;
  align-items: center;
  gap: 18px;
`;
