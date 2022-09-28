import React from "react";
import styled from "styled-components";
import Modal from "../../element/Modal";

export default function CategoryModal(props) {
  const { onClose, onCancel, onConfirm, text1, text2 } = props;

  return (
    <Modal onClose={onClose}>
      <ModalBody>
        <ModalContents>
          <div
            style={{ display: `${text1 ? null : "none"}` }}
            className="contents1"
          >
            {text1}
          </div>
          <div
            style={{ display: `${text2 ? null : "none"}` }}
            className="contents2"
          >
            {text2}
          </div>
        </ModalContents>
      </ModalBody>
      <ModalFooter>
        <div
          style={{ display: `${onCancel ? null : "none"}` }}
          onClick={onClose}
        >
          취소
        </div>
        <div
          style={{ display: `${onConfirm ? null : "none"}` }}
          onClick={onConfirm}
        >
          확인
        </div>
      </ModalFooter>
    </Modal>
  );
}

const ModalBody = styled.div`
  position: relative;
  width: 100%;
  height: 119px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContents = styled.div`
  width: 335px;
  height: 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .contents1 {
    margin-bottom: 4px;
    letter-spacing: -0.2px;
    line-height: 31.2px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }

  & > .contents2 {
    line-height: 16px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #b1bdcf;
  }
`;

const ModalFooter = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  display: flex;
  background-color: #1671fa;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    color: #fff;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    cursor: pointer;
  }
`;
