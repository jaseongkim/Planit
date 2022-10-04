import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Timer from "../components/timer/Timer";

export default function TimerPage() {
  const [value, setValue] = useState(10);

  const isRunning = useSelector((state) => state.timerSlice.isRunning);

  return (
    <StTimerContainer>
      <MainHeader text={"타이머"} color={""} />
      <div>
        <Timer value={value} />
        <StInputWrap>
          <input
            type="range"
            min={10}
            max={120}
            step={5}
            value={value}
            disabled={isRunning ? true : false}
            onChange={(e) => setValue(parseInt(e.target.value))}
          />
        </StInputWrap>
      </div>
    </StTimerContainer>
  );
}

const StTimerContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 70px;
  overflow-y: auto;
  text-align: center;
`;

const StInputWrap = styled.div`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 292px;
    height: 18px;
    background-color: #689ae8;
    border-radius: 44px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
      background: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      border: 3px solid #1671fa;
      border-radius: 100px;
    }
  }
`;
