import React from "react";
import styled from "styled-components";
import Sheet from "react-modal-sheet";
import { useState } from "react";

export default function CategoryScope({ isOpen, isPublic, onScopeSheetClose }) {
  const [scope, setScope] = useState(isPublic);

  return (
    <CustomSheet isOpen={isOpen}>
      <CustomSheet.Container>
        <CustomSheet.Content>
          <ContentHeader>
            <EditTitleWrap>
              <EditTitle>공개 범위</EditTitle>
            </EditTitleWrap>
            <EditSubmit
              onClick={() => {
                onScopeSheetClose(scope);
              }}
            >
              확인
            </EditSubmit>
          </ContentHeader>
          <ContentFooter>
            <CustomCheckList>
              <CustomCheckItem>
                <label>
                  <CustomCheck>
                    <input
                      type="radio"
                      name="publicRadio"
                      onClick={() => {
                        setScope(false);
                      }}
                      defaultChecked={scope ? "" : true}
                    />
                    <div></div>
                  </CustomCheck>
                  <span>전체공개</span>
                </label>
              </CustomCheckItem>
              <CustomCheckItem>
                <label>
                  <CustomCheck>
                    <input
                      type="radio"
                      name="publicRadio"
                      onClick={() => {
                        setScope(true);
                      }}
                      defaultChecked={scope ? true : ""}
                    />
                    <div></div>
                  </CustomCheck>
                  <span>나만보기</span>
                </label>
              </CustomCheckItem>
            </CustomCheckList>
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
    background-color: #516d93 !important;
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

const CustomCheckList = styled.div``;

const CustomCheckItem = styled.div`
  label {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 14px;
    color: #fff;
  }

  &:not(:first-child) {
    margin-top: 12px;
  }
`;

const CustomCheck = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #8b98ac;
    border-radius: 100px;
  }

  input[type="radio"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;

    &:checked + div::after {
      content: "";
      width: 12px;
      height: 12px;
      background-color: #3185f3;
      border-radius: 100px;
    }
  }
`;
