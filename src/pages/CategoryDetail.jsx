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
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 100px 0 40px;
  overflow-y: auto;
  background: #17171b;
`;
