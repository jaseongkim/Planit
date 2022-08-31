import React from "react";
import styled from "styled-components";
import Router from "./Router";

export default function Mobile() {
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
