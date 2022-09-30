// React
import React from "react";
// Styled Component
import styled from "styled-components";
// React-Router-Dom
import { useNavigate } from "react-router-dom";

import { logo } from "../static/images";
import { useEffect } from "react";

const LogoPage = () => {
  // Navigate
  const navigate = useNavigate();

  const memberId = localStorage.getItem("memberId");
  const accesstokenexpiretime = localStorage.getItem("accesstokenexpiretime");
  const nickname = localStorage.getItem("nickname");
  const refreshToken = localStorage.getItem("refreshToken");
  const token = localStorage.getItem("token");

  // UseEffect : Displaying LogoPage and after 2 sec, redirect to the login page
  useEffect(() => {
    if (
      memberId &&
      accesstokenexpiretime &&
      nickname &&
      refreshToken &&
      token
    ) {
      setTimeout(() => navigate("/wklytodo"), 1800);
    } else {
      setTimeout(() => navigate("/login"), 1800);
    }
  }, []);

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
