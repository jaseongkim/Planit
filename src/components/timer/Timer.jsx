import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTimer } from "react-timer-hook";
import ModalInner from "../../element/ModalInner";
import { postTimer } from "../../redux/modules/timerSlice";

export default function Timer({ value }) {
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [modal, setModal] = useState(false);

  // 현재시간 + 타이머
  const numToMins = (value) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + value);
    return time;
  };

  const { seconds, minutes, hours, isRunning, start, pause, restart, resume } =
    useTimer({
      expiryTimestamp: numToMins(value),
      onExpire: () => alert("땡땡땡!"),
      autoStart: false,
    });

  const onStartHandler = () => {
    start();
    const startCurrent = hours * 3600 + minutes * 60;
    setStartTime(startCurrent);
  };

  const onStopHandler = () => {
    setModal(true);
    pause();
    // const confirm = window.confirm("종료하시겠습니까?");
    // if (confirm) {
    //   restart(numToMins(value));
    //   pause();
    // }
    const end = startTime - (hours * 3600 + minutes * 60 + seconds);
    setEndTime(end);

    const time = {
      setTime: startTime,
      elapsedTime: endTime,
    };
    console.log(time);

    // dispatch(postTimer(time));
  };

  return (
    // 타이머 View
    <React.Fragment>
      {modal && (
        <ModalInner
          text1={"타이머를 종료할까요?"}
          onConfirm={() => {
            setModal(false);
          }}
          onCancel={() => {
            setModal(false);
            restart(numToMins(value));
          }}
          onClose={() => {
            setModal(false);
            restart(numToMins(value));
          }}
        />
      )}
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
            :<span>{(value % 60).toString().padStart(2, 0)}</span>:
            <span>00</span>
          </div>
        )}

        {/* 시작버튼 */}
        {isRunning ? (
          <button disabled={true}>Start</button>
        ) : (
          <button onClick={onStartHandler}>Start</button>
        )}

        {/* 종료버튼 */}
        {isRunning ? (
          <button onClick={onStopHandler}>Pause</button>
        ) : (
          <button disabled={true}>Pause</button>
        )}
      </div>
    </React.Fragment>
  );
}
