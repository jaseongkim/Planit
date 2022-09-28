import React from "react";
import styled from "styled-components";
import Sheet from "react-modal-sheet";
import { useState } from "react";

export default function WklyPlanetEdit({
  isOpen,
  planetType,
  planetSize,
  planetColor,
  planetLevel,
  onEditSheetClose,
}) {
  const [size, setSize] = useState(44);
  const [color, setColor] = useState(1);

  const handleSizeChange = (size) => {
    setSize(parseInt(size));
  };

  return (
    <CustomSheet isOpen={isOpen}>
      <StyImg
        // src={require(`../static/images/planets/planet${planetType}${planetColor}${planetLevel}.png`)}
        src={require(`../../static/images/planets/planet1${color}3.png`)}
        planetSize={size}
      />
      <CustomSheet.Container>
        <CustomSheet.Content>
          <ContentWrap>
            <ContentHeader>
              <EditTitleWrap>
                <EditTitle>크기</EditTitle>
                <EditSubmit
                  onClick={() => {
                    onEditSheetClose(size, color);
                  }}
                >
                  확인
                </EditSubmit>
              </EditTitleWrap>
            </ContentHeader>
            <ContentFooter>
              <SizeRange>
                <input
                  type="range"
                  min={44}
                  max={100}
                  value={size}
                  onChange={(e) => handleSizeChange(e.target.value)}
                />
              </SizeRange>
            </ContentFooter>
          </ContentWrap>
          <ContentWrap>
            <ContentHeader>
              <EditTitleWrap>
                <EditTitle>색상</EditTitle>
              </EditTitleWrap>
            </ContentHeader>
            <ContentFooter>
              <ColorList>
                <ColorItem
                  onClick={() => {
                    setColor(1);
                  }}
                  className={color === 1 ? "active" : ""}
                ></ColorItem>
                <ColorItem
                  onClick={() => {
                    setColor(2);
                  }}
                  className={color === 2 ? "active" : ""}
                ></ColorItem>
                <ColorItem
                  onClick={() => {
                    setColor(3);
                  }}
                  className={color === 3 ? "active" : ""}
                ></ColorItem>
                <ColorItem
                  onClick={() => {
                    setColor(4);
                  }}
                  className={color === 4 ? "active" : ""}
                ></ColorItem>
                <ColorItem
                  onClick={() => {
                    setColor(5);
                  }}
                  className={color === 5 ? "active" : ""}
                ></ColorItem>
              </ColorList>
            </ContentFooter>
          </ContentWrap>
        </CustomSheet.Content>
      </CustomSheet.Container>
      <Sheet.Backdrop />
    </CustomSheet>
  );
}

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    display: none;
  }

  .react-modal-sheet-container {
    display: fixed;
    bottom: 0;
    height: auto !important;
    right: 0;
    margin: 0 auto;
    max-width: 375px;
    width: 100%;
    background-color: #597498 !important;
    padding: 24px 0 40px;
  }

  .react-modal-sheet-content {
    padding: 0 16px;
    background: transparent;
  }
`;

const StyImg = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => props.planetSize}px;
  z-index: 999;
`;

const ContentWrap = styled.div`
  user-select: none;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
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
  justify-content: space-between;
  width: 100%;
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

const SizeRange = styled.div`
  display: flex;
  align-items: center;
  margin: 28px 0;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;

    &::-webkit-slider-runnable-track {
      width: 100%;
      background-color: #384c68;
      border-radius: 100px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
      background: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
      border: 3px solid #597498;
      border-radius: 100px;
    }
  }
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
    border: 3px solid #597498;
    border-radius: 100px;
  }

  &:nth-child(1) {
    background: #4d22b2;
  }
  &:nth-child(2) {
    background: #388eff;
  }
  &:nth-child(3) {
    background: #ffe37e;
  }
  &:nth-child(4) {
    background: #ff7ebc;
  }
  &:nth-child(5) {
    background: #8b98ac;
  }
`;
