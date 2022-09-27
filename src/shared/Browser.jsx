// React
import React, { useState, useContext } from "react";
// React Component
import styled from "styled-components";
import Menu from "../components/hamburNavi/Menu";
import Router from "./Router";
// Icons
import Stars from "../element/stars/Stars";
// Context API
import { AppContext } from "../context";
// import { bgleft, bgright } from "../static/images";

export default function Brower() {
  // Context API : opening & closing burgar navi
  const { open, setOpen } = useContext(AppContext);

  return (
    <Back>
      <MobileWrap open={open}>
        <Router />
        <Menu open={open} setOpen={setOpen} />
      </MobileWrap>
      <Stars></Stars>
    </Back>
  );
}

const Back = styled.div`
  background: linear-gradient(
    180deg,
    #121212 0%,
    #1b60bb 70.31%,
    #3a83e4 82.55%,
    #d8e2ee 95.05%,
    #eeeeee 100%
  );
`;

const MobileWrap = styled.div`
  position: relative; // Header position을 sticky로 할 경우
  max-width: 370px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: ${(props) => (props.open ? "hidden" : "visible")};
  margin: 0 auto;
  z-index: 10;
  box-shadow: 6px 0px 14px rgba(219, 219, 219, 0.39),
    -26px 6px 90px rgba(73, 73, 73, 0.58);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }

  /* @media(max-width: 820px) {
    box-shadow: none;
  } */
`;
