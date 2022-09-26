import React from "react";
import CategoryDetailBox from "../components/category/CategoryDetailBox";
import CategoryHeader from "../components/category/CategoryHeader";
import styled from "styled-components";

const CategoryDetail = () => {
  return (
    <SubContainer>
      <CategoryHeader />
      <CategoryDetailBox />
    </SubContainer>
  );
};

export default CategoryDetail;

const SubContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: #17171b;
`;
