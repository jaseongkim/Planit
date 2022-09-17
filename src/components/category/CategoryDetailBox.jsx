import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {
  createCategThunk,
  deleteCategThunk,
  updateCategThunk,
} from "../../redux/modules/categTodoSlice";

export default function CategoryDetailBox() {
  const navigate = useNavigate();

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

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const onDeleteHandler = () => {
    dispatch(deleteCategThunk(id));
    navigate("/category")
    // window.location.replace("/category");
  };


  const onConfirmHandler = () => {
    if (categoriesDetail === undefined) {
      dispatch(createCategThunk(category));
      navigate("/category")
      // window.location.replace("/category");
    } else {
      dispatch(updateCategThunk({ id, category }));
      setCategory(category);
      navigate("/category")
      // window.location.replace("/category");
      // navigate("/category");
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
      {categoriesDetail === undefined ? null : <button onClick={onDeleteHandler}>삭제하기</button>}
      {category.categoryName === "" ? <button onClick={onDeleteHandler} disabled>완료</button> :<button onClick={onConfirmHandler}>완료</button>}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  border: 3px solid green;
  margin-top: 1.7em;
  height: 100%;
  position: relative;

  button:last-child {
    position: absolute;
    bottom: 10%;
    left: 50%;
  }
`;

const InputBox = styled.div`
  margin-top: 6em;
  width: 20.8em;
  height: 4.3em;
  border: none;
  margin: 0 auto;

  input {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
