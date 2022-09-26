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
          <button onClick={() => onClickedSheet()}>
            공개 범위
            <span>
              전체공개
            </span>
          </button>
          <button onClick={() => onClickedSheet()}>
            색상
            <span>
              <PickedColor></PickedColor>
            </span>
          </button>
          <button>카테고리 종료하기</button>
          <button>카테고리 재개하기</button>
          {categoriesDetail === undefined ? null : (
            <button onClick={onDeleteHandler}>카테고리 삭제하기</button>
          )}
        </CategoryOption>
      </CategoryWrap>
      {category.categoryName === "" ? <CategorySubmit onClick={onConfirmHandler} disabled>확인</CategorySubmit> :<CategorySubmit onClick={onConfirmHandler}>확인</CategorySubmit>}

      {/* <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <CustomSheet.Container>
          <CustomSheet.Content>
            <ContentHeader>
              <EditTitleWrap>
                <EditTitle>공개 범위</EditTitle>
              </EditTitleWrap>
              <EditSubmit onClick={() => setOpen(false)}>확인</EditSubmit>
            </ContentHeader>
            <ContentFooter>
              
            </ContentFooter>
          </CustomSheet.Content>
        </CustomSheet.Container>
        <Sheet.Backdrop />
      </CustomSheet> */}

      <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
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
        </CustomSheet>

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
  margin-top: 25px;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: #b1bdcf;
    padding: 14px 0;
    background: transparent;
    border: none;

    span {
      color: #fff;
    }
  }
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