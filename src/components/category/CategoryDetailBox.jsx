import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  createCategThunk,
  deleteCategThunk,
  updateCategThunk,
} from "../../redux/modules/categTodoSlice";
import { select_arrow } from "../../static/images";
import CategoryScope from "./CategoryScope";
import CategoryColor from "./CategoryColor";

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
    categoryColor:
      categoriesDetail === undefined ? "" : categoriesDetail.categoryColor,
    isPublic:
      categoriesDetail === undefined ? false : categoriesDetail.isPublic,
    categoryStatus:
      categoriesDetail === undefined
        ? "NOT_STOP"
        : categoriesDetail.categoryStatus,
  };

  const [category, setCategory] = useState(initialState);
  const [isScopeOpen, setScopeOpen] = useState(false);
  const [isColorOpen, setColorOpen] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const onDeleteHandler = () => {
    dispatch(deleteCategThunk(id));
  };

  const onUpdateHandler = () => {
    const copy = category;
    copy.categoryStatus = "STOP";
    setCategory(copy);

    dispatch(updateCategThunk({ id, category }));
  };

  const onConfirmHandler = () => {
    if (categoriesDetail === undefined && Number(id) === 0) {
      dispatch(createCategThunk(category));
    } else {
      dispatch(updateCategThunk({ id, category }));
      setCategory(category);
    }
  };

  const onScopeSheetOpen = () => {
    setScopeOpen(true);
  };

  const onScopeSheetClose = (scope) => {
    const copy = category;
    copy.isPublic = scope;
    setCategory(copy);

    setScopeOpen(false);
  };

  const onColorSheetOpen = () => {
    setColorOpen(true);
  };
  const onColorSheetClose = (color) => {
    const copy = category;
    copy.categoryColor = color;
    setCategory(copy);
    setColorOpen(false);
  };

  return (
    <CategoryContainer>
      <CategoryWrap>
        <InputBox>
          <input
            style={{ color: `${category.categoryColor}` }}
            type={"text"}
            name="categoryName"
            value={category.categoryName}
            onChange={onChangeHandler}
          />
        </InputBox>
        <CategoryOption>
          <CategoryOptionItem>
            <CategoryOptionTitle>공개 범위</CategoryOptionTitle>
            <button onClick={onScopeSheetOpen}>
              {category.isPublic ? "나만보기" : "전체공개"}
              <img src={select_arrow} alt="셀렉트 화살표 아이콘" />
            </button>
          </CategoryOptionItem>
          <CategoryOptionItem>
            <CategoryOptionTitle>색상</CategoryOptionTitle>
            <button onClick={onColorSheetOpen}>
              <PickedColor
                style={{ background: `${category.categoryColor}` }}
              ></PickedColor>
              <img src={select_arrow} alt="셀렉트 화살표 아이콘" />
            </button>
          </CategoryOptionItem>

          {categoriesDetail === undefined ? null : category.categoryStatus ===
            "NOT_STOP" ? (
            <>
              <CategoryOptionItem>
                <button onClick={onUpdateHandler}>카테고리 종료하기</button>
              </CategoryOptionItem>
              <CategoryOptionItem>
                <button onClick={onDeleteHandler}>카테고리 삭제하기</button>
              </CategoryOptionItem>
            </>
          ) : (
            <>
              <CategoryOptionItem>
                <button onClick={onUpdateHandler}>카테고리 재개하기</button>
              </CategoryOptionItem>
              <CategoryOptionItem>
                <button onClick={onDeleteHandler}>카테고리 삭제하기</button>
              </CategoryOptionItem>
            </>
          )}
        </CategoryOption>
      </CategoryWrap>
      {category.categoryName === "" ? (
        <CategorySubmit onClick={onConfirmHandler} disabled>
          확인
        </CategorySubmit>
      ) : (
        <CategorySubmit onClick={onConfirmHandler}>확인</CategorySubmit>
      )}

      <CategoryScope
        isOpen={isScopeOpen}
        onScopeSheetClose={onScopeSheetClose}
        isPublic={category.isPublic}
      />
      <CategoryColor
        isOpen={isColorOpen}
        onColorSheetClose={onColorSheetClose}
        categoryColor={category.categoryColor}
      />
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

const CategoryOptionTitle = styled.span``;

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
