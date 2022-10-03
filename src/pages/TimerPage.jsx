import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import Timer from "../components/timer/Timer";

export default function TimerPage() {
  const [value, setValue] = useState(10);

  return (
    <StTimerContainer>
      <MainHeader text={"타이머"} color={""} />
      <Timer value={value} />
      <input
        type="range"
        min={10}
        max={120}
        step={5}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </StTimerContainer>
  );
}

const StTimerContainer = styled.div``;
