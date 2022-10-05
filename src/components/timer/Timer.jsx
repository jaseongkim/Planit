import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTimer } from "react-timer-hook";
import styled from "styled-components";
import ModalInner from "../../element/ModalInner";
import { postTimer, setRunning } from "../../redux/modules/timerSlice";

export default function Timer({ value }) {
  const dispatch = useDispatch();

  const [pauseTime, setPauseTime] = useState(false);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(0);

  const numToMins = (value) => {
    const time = new Date();
    time.setMinutes(time.getMinutes() + value);
    return time;
  };

  const { seconds, minutes, hours, isRunning, start, pause, restart, resume } =
    useTimer({
      expiryTimestamp: numToMins(value),
      onExpire: () => {
        setSelect(1);
        setModal(true);
      },
      autoStart: false,
    });

  const onStartHandler = () => {
    restart(numToMins(value));
    dispatch(setRunning(true));
  };

  const onPauseHandler = () => {
    setModal(true);
    setPauseTime(true);
    pause();
  };

  const onEndHandler = () => {
    restart(numToMins(value));
    pause();
    setPauseTime(false);
    setModal(false);

    const endTime = Math.floor(
      (value * 60 - (hours * 3600 + minutes * 60 + seconds)) / 60
    );
    console.log(endTime);

    const data = {
      setTime: value,
      elapsedTime: endTime,
    };

    dispatch(setRunning(false));
    dispatch(postTimer(data));
  };

  return (
    // 타이머 View
    <React.Fragment>
      {modal &&
        [
          <ModalInner
            text1={"타이머를 종료할까요?"}
            onConfirm={onEndHandler}
            onCancel={() => {
              setModal(false);
              resume();
            }}
            onClose={() => {
              setModal(false);
              resume();
            }}
          />,
          <ModalInner
            text1={`${value}분 완료!`}
            onCancel={() => {
              setModal(false);
            }}
            onClose={() => {
              setModal(false);
            }}
          />,
        ][select]}
      <div style={{ textAlign: "center" }}>
        <StTimerWrap>
          {isRunning ? (
            <div style={{ fontSize: "50px", color: "#fff" }}>
              <span>{hours.toString().padStart(2, 0)}</span>:
              <span>{minutes.toString().padStart(2, 0)}</span>:
              <span>{seconds.toString().padStart(2, 0)}</span>
            </div>
          ) : pauseTime ? (
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
        </StTimerWrap>

        {/* 시작버튼 */}
        <StTimerBtnWrap>
          <StTimerBtn
            onClick={onStartHandler}
            disabled={isRunning ? true : false}
          >
            시작
          </StTimerBtn>

          <StTimerBtn
            onClick={onPauseHandler}
            disabled={isRunning ? false : true}
          >
            중단
          </StTimerBtn>
        </StTimerBtnWrap>
      </div>
    </React.Fragment>
  );
}

const StTimerWrap = styled.div`
  position: relative;
  margin: 0px 86px;
  top: 100px;
`;

const StTimerBtnWrap = styled.div`
  position: relative;
  display: flex;
  width: 295px;
  height: 76px;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  top: 258px;
`;

const StTimerBtn = styled.button`
  border: 1px solid #fff;
  background: none;
  width: 76px;
  height: 76px;
  border-radius: 100px;
  color: #fff;
`;
