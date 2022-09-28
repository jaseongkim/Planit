// React
import React from "react";
// Styled Component
import styled from "styled-components";
// React-Router-Dom
import { useNavigate } from "react-router-dom";

import { logo, welcomImg } from "../static/images";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <StyWelcomeCont>
      <StyLogoHeader>
        <img src={logo} alt="로고 이미지" />
      </StyLogoHeader>
      <StyWelcomeImgWrap>
        <img src={welcomImg} alt="" />
      </StyWelcomeImgWrap>
      <StyWelecomeText>
        <p>
          <span>
            <img src={logo} alt="로고 이미지" />
          </span>
          에서는
          <br />
          할 일을 완료할수록 행성이 자라나고
          <br />
          하루에 하나씩 행성을 얻을 수 있어요.
        </p>
        <strong>
          매일 획득한 행성으로
          <br />
          나만의 우주를 꾸며보세요!
        </strong>
      </StyWelecomeText>
      <StySubmitButton
        onClick={() => {
          navigate("/wklytodo");
        }}
      >
        확인
      </StySubmitButton>
    </StyWelcomeCont>
  );
};

export default Welcome;

const StyWelcomeCont = styled.div`
  padding: 0 16px 200px;
`;

const StyLogoHeader = styled.div`
  padding-top: 30px;
`;

const StyWelcomeImgWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 64px 0 86px;
`;

const StyWelecomeText = styled.div`
  text-align: center;
  color: #fff;

  img {
    width: 85px;
  }

  p {
    line-height: 24px;
    font-weight: 400;
  }

  strong {
    line-height: 30px;
    font-weight: 600;
    font-size: 20px;
    padding-top: 76px;
  }
`;

const StySubmitButton = styled.button`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  font-size: 20px;
  color: #fff;
  padding: 20px 0 40px;
  background: #1671fa;
  border: none;
  transition: 0.2s;

  &:disabled {
    background: #8b98ac;
  }
`;
