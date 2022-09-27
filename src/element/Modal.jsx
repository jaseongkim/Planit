import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ModalContainer from "./ModalContainer";

export default function Modal({ onClose, children }) {
  const handleClose = () => {
    onClose?.();
  };

  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   $body.style.overflow = "hidden";
  //   return () => ($body.style.overflow = "auto");
  // }, []);

  return (
    <ModalContainer>
      <Overlay onClick={handleClose}>
        <ModalWrap
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Contents>{children}</Contents>
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
const Contents = styled.div``;
