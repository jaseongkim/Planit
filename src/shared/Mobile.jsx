import React, { useEffect } from "react";
import styled from "styled-components";
import Router from "./Router";

export default function Mobile() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  }, []);

  // 모바일 100vh가 필요한 곳에서 이렇게 사용
  // height: calc(var(--vh, 1vh) * 100)

  return (
    <MobileWrap>
      <Router />;
    </MobileWrap>
  );
}

const MobileWrap = styled.div`
  width: 100%;
  overflow-x: hidden;
`;
