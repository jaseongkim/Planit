import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createCategThunk } from "../../redux/modules/categTodoSlice";

export default function CategoryDetailBox() {
  const dispatch = useDispatch();

  const initialState = {
    categoryName: "",
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

const CategoryContainer = styled.div`


/* border: 3px solid green; */
margin-top: 1.7em;
height: 100%;
button:last-child{
    width: 5em;
  }

`;

const InputBox = styled.div`
  margin-top: 6em;
  width: 20.8em;
  height: 4.3em;
  border: none;
  margin: 0 auto;

  input{
    width: 100%;
   height: 100%;
   border: none;
  }
`;