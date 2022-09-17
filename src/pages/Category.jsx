import React from "react";
import CategList from "../components/category/CategList";
import CategoryHeader from "../components/category/CategoryHeader";
import styled from "styled-components";

const Category = () => {
  return (
    <SubContainer>
      <CategoryHeader />
      <CategList />
    </SubContainer>
  );
};

export default Category;

const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 100px 0 40px;
  overflow-y: auto;
  background: #17171b;
`;
