import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  createCategThunk,
  deleteCategThunk,
  updateCategThunk,
} from "../../redux/modules/categTodoSlice";
import Sheet from "react-modal-sheet";
import { select_arrow } from "../../static/images";

export default function CategoryDetailBox() {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categTodoSlice.categories);

  let categoriesDetail;

  let { id } = useParams();

  categoriesDetail = categories?.find(
    (category) => category.categoryId === Number(id)
  );

  const initialState = {
    categoryName:
      categoriesDetail === undefined ? "" : categoriesDetail.categoryName,
    categoryColor: "green",
    isPublic: "false",
    categoryStatus: "NOT_STOP",
  };

  const [category, setCategory] = useState(initialState);
  const [isOpen, setOpen] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const onDeleteHandler = () => {
    dispatch(deleteCategThunk(id));
  };


  const onConfirmHandler = () => {
    if (categoriesDetail === undefined) {
      dispatch(createCategThunk(category));
    } else {
      dispatch(updateCategThunk({ id, category }));
      setCategory(category);
    }
  };

  const onClickedSheet = () => {
    setOpen(true);
  };

  return (
    <CategoryContainer>
      <CategoryWrap>
        <InputBox>
          <input
            type={"text"}
            name="categoryName"
            value={category.categoryName}
            onChange={onChangeHandler}
          />
        </InputBox>
        <CategoryOption>
          <CategoryOptionItem>
            <CategoryOptionTitle>공개 범위</CategoryOptionTitle>
            <button onClick={() => onClickedSheet()}>
              전체공개
              <img src={select_arrow} alt="셀렉트 화살표 아이콘" />
            </button>
          </CategoryOptionItem>
          <CategoryOptionItem>
            <CategoryOptionTitle>색상</CategoryOptionTitle>
            <button onClick={() => onClickedSheet()}>
              <PickedColor></PickedColor>
              <img src={select_arrow} alt="셀렉트 화살표 아이콘" />          
            </button>
          </CategoryOptionItem>
          <CategoryOptionItem>
            <button>카테고리 종료하기</button>
          </CategoryOptionItem>
          <CategoryOptionItem>
            <button>카테고리 재개하기</button>
          </CategoryOptionItem>
          {categoriesDetail === undefined ? null : (
            <button onClick={onDeleteHandler}>카테고리 삭제하기</button>
          )}
        </CategoryOption>
      </CategoryWrap>
      {category.categoryName === "" ? <CategorySubmit onClick={onConfirmHandler} disabled>확인</CategorySubmit> :<CategorySubmit onClick={onConfirmHandler}>확인</CategorySubmit>}

      <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <CustomSheet.Container>
          <CustomSheet.Content>
            <ContentHeader>
              <EditTitleWrap>
                <EditTitle>공개 범위</EditTitle>
              </EditTitleWrap>
              <EditSubmit onClick={() => setOpen(false)}>확인</EditSubmit>
            </ContentHeader>
            <ContentFooter>
              <CustomCheckList>
                <CustomCheckItem>
                  <label>
                    <CustomCheck>
                      <input
                        type="radio"
                        name="publicRadio"
                        checked={true}
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

      {/* <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <CustomSheet.Container>
          <CustomSheet.Content>
            <ContentHeader>
              <EditTitleWrap>
                <EditTitle>색상</EditTitle>
              </EditTitleWrap>
              <EditSubmit onClick={() => setOpen(false)}>확인</EditSubmit>
            </ContentHeader>
            <ContentFooter>
              <ColorList>
                <ColorItem className="active"></ColorItem>
                <ColorItem></ColorItem>
                <ColorItem></ColorItem>
                <ColorItem></ColorItem>
                <ColorItem></ColorItem>
              </ColorList>
            </ContentFooter>
          </CustomSheet.Content>
        </CustomSheet.Container>
        <Sheet.Backdrop />
      </CustomSheet> */}
      
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const CategoryWrap = styled.div`
  width: 100%;
`;

const CategoryOption = styled.div`
  color: #fff;
  margin-top: 25px;
`;

const CategoryOptionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    padding: 14px 0;
    background: transparent;
    border: none;

    img {
      margin-left: 8px;
    }
  }
`;

const CategoryOptionTitle = styled.span`

`;

const InputBox = styled.div`
  input[type="text"] {
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding: 0 15px;
    background: #343842;
    border: none;
    border-radius: 4px;

    &::placeholder {
      color: #fff;
    }
  }
`;

const CategorySubmit = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 52px;
  font-size: 20px;
  color: #fff;
  background: #3185f3;
  border: none;
  
  &:disabled {
    background: #8b98ac;
  }
`;

const PickedColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100px;
  background: #fff;
`;

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
    border: 3px solid #ffffff;
  }
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
  }

  .react-modal-sheet-header {
    /* custom styles */
  }

  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }

  .react-modal-sheet-content {
    /* custom styles */
    padding: 0 5% 5% 5%;
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

const EditSubmit = styled.button``;

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
    width: 25px;
    height: 25px;
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
    background: #36EDC1;
  }
`;