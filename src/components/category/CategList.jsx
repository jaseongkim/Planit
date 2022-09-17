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
    // let a = setTimeout(() => {
    dispatch(getCategThunk("2022-09-05"));
    // }, 300);
    // return () => {
    //   clearTimeout(a);
    // };
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

const WorkingCategory = styled.div`
  margin: 10px 0 10px 0;
`;

const DoneCategory = styled.div`
  margin-top: 80px;
`;

const TextWrap = styled.div`
  font-weight: 600;
  // font-size: ${({ theme }) => theme.fontSizes.lg};
  font-size: 14px;
  color: #b1bdcf;
`;
