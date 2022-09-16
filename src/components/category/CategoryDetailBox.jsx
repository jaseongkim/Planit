import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  createCategThunk,
  deleteCategThunk,
  updateCategThunk,
} from "../../redux/modules/categTodoSlice";

export default function CategoryDetailBox() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categTodoSlice.categories);

  let { id } = useParams();

  let categoriesDetail = categories.find(
    (category) => category.categoryId === Number(id)
  );

  const initialState = {
    categoryName: categoriesDetail?.categoryName,
    categoryColor: "green",
    isPublic: "false",
    categoryStatus: "NOT_STOP",
  };

  const [category, setCategory] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const onDeleteHandler = () => {
    dispatch(deleteCategThunk(id));
  };

  const onConfirmHandler = () => {
    console.log(category);
    setCategory(initialState);

    if (categoriesDetail === undefined) {
      dispatch(createCategThunk(category));
    } else {
      dispatch(updateCategThunk({ id, category }));
      setCategory(category);
    }
  };

  return (
    <CategoryContainer>
      <InputBox>
        <input
          type={"text"}
          name="categoryName"
          value={category.categoryName}
          onChange={onChangeHandler}
        />
      </InputBox>
      <button onClick={onDeleteHandler}>삭제하기</button>
      <button style={{ marginLeft: "10px" }} onClick={onConfirmHandler}>
        완료
      </button>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div``;

const InputBox = styled.div`
  width: 340px;
  height: 50px;
  background-color: red;
  text-align: center;
  margin: 0 auto;
`;
