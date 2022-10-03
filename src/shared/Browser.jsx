// React
import React, { useContext, useEffect } from "react";
// React Component
import styled from "styled-components";
import Menu from "../components/hamburNavi/Menu";
import Router from "./Router";
// Icons
import Stars from "../element/stars/Stars";
// Context API
import { AppContext } from "../context";
import useGaTracker from "./useGaTracker";

export default function Browser() {
  useGaTracker();
  // Context API : opening & closing the burgar navi
  const { open, setOpen } = useContext(AppContext);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

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
    #17519e 59.37%,
    #256ece 74.48%,
    #4c92f0 85.94%,
    #accbf9 100%
  );
`;

const MobileWrap = styled.div`
  position: relative;
  max-width: 375px;
  height: calc(var(--vh, 1vh) * 100);
  overflow-x: hidden;
  overflow-y: ${(props) => (props.open === true ? "hidden" : "visible")};
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  z-index: 10;

  @media (max-width: 425px) {
    box-shadow: none;
  }
`;
