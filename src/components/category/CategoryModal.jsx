import React from "react";
import styled from "styled-components";
import Modal from "../../element/Modal";

export default function CategoryModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <ModalBody>
        <ModalContents>
          <div className="contents1">목표를 종료할까요?</div>
          <div className="contents2">이전에 달성한 투두까지 사라져요.</div>
        </ModalContents>
      </ModalBody>
      <ModalFooter>
        <div onClick={onClose}>취소</div>
        <div onClick={onClose}>확인</div>
      </ModalFooter>
    </Modal>
  );
}

const ModalBody = styled.div`
  position: relative;
  width: 100%;
  height: 119px;
  text-align: center;
`;

const ModalContents = styled.div`
  position: absolute;
  height: 59px;
  padding: 4px 10px 4px 10px;
  margin: 32px 66px 28px 66px;
  gap: 10px;

  & > .contents1 {
    position: relative;
    width: 183px;
    height: 31px;
    margin-bottom: 4px;
    letter-spacing: -0.2px;
    line-height: 31.2px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }

  & > .contents2 {
    width: 184px;
    height: 16px;
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
