import React, { useState } from "react";
import Timer from "../components/timer/Timer";

export default function TimerPage() {
  const [value, setValue] = useState(10);

  return (
    <div>
      <Timer value={value} />
      <input
        type="range"
        min={10}
        max={120}
        step={5}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
    </div>
  );
}
