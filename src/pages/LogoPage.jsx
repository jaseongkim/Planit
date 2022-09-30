// React
import React from "react";
// Styled Component
import styled from "styled-components";
// React-Router-Dom
import { useNavigate } from "react-router-dom";

import { logo } from "../static/images";

const LogoPage = () => {
  const navigate = useNavigate();

  return (
    <LogoPageCont>
      <LogoBox>
        <img src={logo} alt="로고 이미지" />
        {/* <p>서버 점검 중 입니다.</p> */}
      </LogoBox>
    </LogoPageCont>
  );
};

export default LogoPage;

const LogoPageCont = styled.div``;

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
