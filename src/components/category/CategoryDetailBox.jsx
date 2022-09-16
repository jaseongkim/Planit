import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { createCategThunk } from "../../redux/modules/categTodoSlice";

export default function CategoryDetailBox() {
  const categories = useSelector((state) => state.categTodoSlice.categories);

  console.log(categories);

  let { id } = useParams();

  console.log(id);

  let categoriesDetail = categories.find(
    (category) => category.categoryId === Number(id)
  );

  console.log(categoriesDetail);

  const dispatch = useDispatch();

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

  const onClickHandler = () => {
    console.log(category);
    setCategory(initialState);
    dispatch(createCategThunk(category));
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
      <button>삭제</button>
      <button onClick={onClickHandler}>완료</button>
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
