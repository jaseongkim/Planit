import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem.jsx";
import { getOnlyCategThunk } from "../../redux/modules/categTodoSlice.js";
import { apis } from "../../shared/api";

const CategList = () => {

  // Navigate
  const navigate = useNavigate();
  const location = useLocation(); 
  
  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const categories = useSelector(
    (state) => state.categTodoSlice.onlyCategories
  );

  // useEffect
  useEffect(() => {
    dispatch(getOnlyCategThunk());
  }, [dispatch]);

  return (
    <CategoryContainer>
      {console.log('Checking here', categories)}
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
  margin-top: 100px;
`;

const TextWrap = styled.div`
  font-weight: 600;
  // font-size: ${({ theme }) => theme.fontSizes.lg};
  font-size: 14px;
  color: #b1bdcf;
`;
