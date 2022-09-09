import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import CategList from "../components/CategList";
import CategStat from "../components/CategStat";

const Category = () => {
  return (
    <>
      <Header></Header>
      <CategCon>
        <CategList></CategList>
        <CategStat></CategStat>
      </CategCon>
    </>
  );
};

export default Category;

const CategCon = styled.div`
    padding: 4%
`;

