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
  width: 100%;
  height: 100%;
  padding-bottom: 70px;
  overflow-y: auto;
  background: #17171b;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;
