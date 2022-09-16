import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem.jsx";
import { getCategThunk } from "../../redux/modules/categTodoSlice.js";

const CategList = () => {
  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const categories = useSelector((state) => state.categTodoSlice.categories);

  console.log(categories);
  // useEffect
  useEffect(() => {
    dispatch(getCategThunk("2022-09-05"));
  }, [dispatch]);

  return (
    <CategoryContainer>
      {categories?.length === 0 ? null : (
        <>
          <WorkingCategory>
            <TextWrap>일반</TextWrap>
            {categories?.map((category) => {
              if (category.categoryStatus === "NOT_STOP") {
                return (
                  <CategoryItem key={category.categoryId} category={category} />
                );
              } else {
                return null;
              }
            })}
          </WorkingCategory>

          <DoneCategory>
            <TextWrap>종료된 목표</TextWrap>
            {categories?.map((category) => {
              if (category.categoryStatus !== "NOT_STOP") {
                return (
                  <CategoryItem key={category.categoryId} category={category} />
                );
              } else {
                return null;
              }
            })}
          </DoneCategory>
        </>
      )}
    </CategoryContainer>
  );
};

export default CategList;

const CategoryContainer = styled.div`
  padding: 0 24px;
`;

const DoneCategory = styled.div``;

const WorkingCategory = styled.div`
  margin: 10px 0 10px 0;
`;

const TextWrap = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #d6d6d6;
`;
