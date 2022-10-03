import React from "react";
import styled from "styled-components";
import { logo } from "../static/images";

const LogoPageFix = () => {
  return (
    <LogoPageCont>
      <LogoBox>
        <img src={logo} alt="로고 이미지" />
        <p>찾을 수 없는 페이지 입니다.</p>
      </LogoBox>
    </LogoPageCont>
  );
};

export default LogoPageFix;

const LogoPageCont = styled.div`
  position: relative;
  height: 100vh;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    text-align: center;
    font-weight: 600;
    color: #fff;
    padding-top: 28px;
  }
`;
