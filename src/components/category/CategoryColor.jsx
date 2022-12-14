import React, { useEffect } from "react";
import styled from "styled-components";
import Sheet from "react-modal-sheet";
import { useState } from "react";

export default function CategoryColor({
  isOpen,
  categoryColor,
  onColorSheetClose,
}) {
  const [color, setColor] = useState(categoryColor);

  useEffect(() => {
    setColor(categoryColor);
  }, [isOpen, categoryColor]);

  return (
    <CustomSheet isOpen={isOpen}>
      <CustomSheet.Container>
        <CustomSheet.Content disableDrag={true}>
          <ContentHeader>
            <EditTitleWrap>
              <EditTitle>색상</EditTitle>
            </EditTitleWrap>
            <EditSubmit
              onClick={() => {
                onColorSheetClose(color);
              }}
            >
              확인
            </EditSubmit>
          </ContentHeader>
          <ContentFooter>
            <ColorList>
              <ColorItem
                onClick={() => {
                  setColor("#fff");
                }}
                className={color === "#fff" ? "active" : ""}
              ></ColorItem>
              <ColorItem
                onClick={() => {
                  setColor("#ffe454");
                }}
                className={color === "#ffe454" ? "active" : ""}
              ></ColorItem>
              <ColorItem
                onClick={() => {
                  setColor("#ff9d2b");
                }}
                className={color === "#ff9d2b" ? "active" : ""}
              ></ColorItem>
              <ColorItem
                onClick={() => {
                  setColor("#ffa4fb");
                }}
                className={color === "#ffa4fb" ? "active" : ""}
              ></ColorItem>
              <ColorItem
                onClick={() => {
                  setColor("#36edc1");
                }}
                className={color === "#36edc1" ? "active" : ""}
              ></ColorItem>
            </ColorList>
          </ContentFooter>
        </CustomSheet.Content>
      </CustomSheet.Container>
      <Sheet.Backdrop />
    </CustomSheet>
  );
}

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-container {
    display: fixed;
    bottom: 0;
    height: auto !important;
    right: 0;
    margin: 0 auto;
    max-width: 375px;
    width: 100%;
    background-color: #5d646b !important;
    padding: 24px 0 40px;
    border-radius: 16px 16px 0 0 !important;
  }

  .react-modal-sheet-content {
    padding: 0 16px;
    background: transparent;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #fff;

  button {
    color: #fff;
    background: transparent;
    border: none;
  }
`;

const EditTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const EditTitle = styled.span`
  font-weight: 600;
  font-size: 20px;
`;

const EditSubmit = styled.button`
  font-weight: 600;
`;

const ContentFooter = styled.div`
  margin-top: 25px;
`;

const ColorList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const ColorItem = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 100px;

  &.active::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 23px;
    height: 23px;
    border: 3px solid #5d646b;
    border-radius: 100px;
  }

  &:nth-child(1) {
    background: #fff;
  }
  &:nth-child(2) {
    background: #ffe454;
  }
  &:nth-child(3) {
    background: #ff9d2b;
  }
  &:nth-child(4) {
    background: #ffa4fb;
  }
  &:nth-child(5) {
    background: #36edc1;
  }
`;
