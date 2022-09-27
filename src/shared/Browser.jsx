import React, { useState } from "react";
import styled from "styled-components";
import Stars from "../element/stars/Stars";
// import { bgleft, bgright } from "../static/images";
import Router from "./Router";

export default function Brower() {

  return (
    <Back>
      <MobileWrap>
        <Router />
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
  )
`;

const MobileWrap = styled.div`
  position: relative; // Header position을 sticky로 할 경우
  max-width: 370px;
  height: 100vh;
  overflow-x: hidden;
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