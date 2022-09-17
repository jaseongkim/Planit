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

              {categoriesDetail === undefined ? null : (
                <div>
                  <button onClick={onDeleteHandler}>카테고리 삭제하기</button>
                </div>
              )}
          </CategoryOption>
      </CategoryWrap>
      {category.categoryName === "" ? <CategorySubmit onClick={onConfirmHandler} disabled>확인</CategorySubmit> :<CategorySubmit onClick={onConfirmHandler}>확인</CategorySubmit>}
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
`;

const CategoryWrap = styled.div`
  width: 100%;
`;

const CategoryOption = styled.div`
  margin-top: 50px;

  button {
    width: 100%;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: #b1bdcf;
    background: transparent;
    padding: 14px 0;
    border: none;
  }
`;

const InputBox = styled.div`
  width: 100%;
  
  input[type="text"] {
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 18px;
    color: #fff;
    padding: 0 5px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #e3e3e3;
  }
`;

const CategorySubmit = styled.button`
  width: 100%;
  height: 52px;
  font-size: 20px;
  color: #fff;
  background: #3185f3;
  border: none;
  border-radius: 8px;
  
  &::disabled {
    background: #8b98ac;
  }
`;