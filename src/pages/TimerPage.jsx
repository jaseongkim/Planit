import React, { useState } from "react";
import Timer from "../components/timer/Timer";
import styled from "styled-components";

export default function TimerPage() {
  // const time = new Date();
  const [value, setValue] = useState(10);
  // time.setMinutes(time.getMinutes() + value);

  return (
    <>
      <Timer value={value} />
      <input
        type="range"
        min={10}
        max={120}
        step={5}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </>
  );
}
