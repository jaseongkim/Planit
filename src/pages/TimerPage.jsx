import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Timer from "../components/timer/Timer";

export default function TimerPage() {
  const [value, setValue] = useState(10);

  return (
    <StTimerContainer>
      <MainHeader text={"타이머"} color={""} />
      <div>
        <Timer value={value} />
        <StTimerBar
          type="range"
          min={10}
          max={120}
          step={5}
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
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

const StTimerBar = styled.input`
  position: relative;
  width: 292px;
  top: 99px;
`;
