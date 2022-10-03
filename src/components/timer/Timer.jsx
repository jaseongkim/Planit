import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import styled from "styled-components";

export default function Timer({ value }) {
  const numToMins = (value) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + value);
    return time;
  };

  const { seconds, minutes, hours, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp: numToMins(value),
      onExpire: () => alert("땡땡땡!"),
      autoStart: false,
    });

  return (
    <div style={{ textAlign: "center" }}>
      {isRunning ? (
        <div style={{ fontSize: "50px", color: "#fff" }}>
          <span>{hours.toString().padStart(2, 0)}</span>:
          <span>{minutes.toString().padStart(2, 0)}</span>:
          <span>{seconds.toString().padStart(2, 0)}</span>
        </div>
      ) : (
        <div style={{ fontSize: "50px", color: "#fff" }}>
          <span>
            {Math.floor(value / 60)
              .toString()
              .padStart(2, 0)}
          </span>
          :<span>{(value % 60).toString().padStart(2, 0)}</span>:<span>00</span>
        </div>
      )}
      {isRunning ? (
        <button disabled={true}>Start</button>
      ) : (
        <button
          onClick={() => {
            restart(numToMins(value));
          }}
        >
          Start
        </button>
      )}
      {isRunning ? (
        <button
          onClick={() => {
            const confirm = window.confirm("종료하시겠습니까?");
            if (confirm) {
              restart(numToMins(value));
              pause();
            }
          }}
        >
          Pause
        </button>
      ) : (
        <button disabled={true}>Pause</button>
      )}
    </div>
  );
}
