import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";

export default function Modal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  return (
    <ModalContainer>
      <Overlay onClick={handleClose}>
        <ModalWrap
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Contents>
            <h1>Modal</h1>
            <Button onClick={handleClose}>Close</Button>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 335px;
  height: 183px;
  border-radius: 16px;
  background-color: #5d646b;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Contents = styled.div`
  /* margin: 50px 30px; */
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
    color: #fff;
  }
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;

  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
