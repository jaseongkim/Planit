// React
import React, { useState } from "react";
// Styled Component
import styled from "styled-components";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  tutorialImg1,
  tutorialImg2,
  logo,
  welcomImg,
  tutorial_arrow,
} from "../static/images";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Tutorial = () => {
  const navigate = useNavigate();

  return (
    <StySwiperCont>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={1}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <TutorialImg src={tutorialImg1} alt="튜토리얼 이미지1" />
        </SwiperSlide>
        <SwiperSlide>
          <TutorialImg src={tutorialImg2} alt="튜토리얼 이미지2" />
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </StySwiperCont>
  );
};

export default Tutorial;

const StySwiperCont = styled.div`
  .swiper {
    position: relative;

    &-slide {
      height: 100vh;
      overflow-y: scroll;
    }

    &-button-prev::after,
    &-button-next::after {
      content: "";
    }

    &-button-disabled {
      display: none;
    }

    &-button-next {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 52px;
      height: 52px;
      background: url(${tutorial_arrow}) no-repeat center;
      z-index: 9999;
      cursor: pointer;
    }
  }
`;

const TutorialImg = styled.img`
  width: 100%;
`;

const StyWelcomeCont = styled.div`
  padding: 0 16px;
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
