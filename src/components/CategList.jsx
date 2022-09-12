import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategThunk } from "../redux/modules/categTodoSlice.js";
import { AiOutlinePlus } from "react-icons/ai";

const CategList = () => {
  
  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const categories = useSelector((state) => state.categTodoSlice.categories);


  // useEffect
  useEffect(() => {
    dispatch(getCategThunk());
  }, []);

  return (
    <CategCon>
        {/* {console.log("checking categories in categList",categories)} */}
      <h3>카테고리<AiOutlinePlus onClick={()=> {alert()}}></AiOutlinePlus></h3>
      {categories.map((categ) => {
        return (
          <CategWrap 
            key={categ.categoryId}
            categColor={categ.categoryColor}
          >
            <h3 
              key={categ.categoryId}
            >{categ.categoryName}</h3>
          </CategWrap>
        );
      })}
    </CategCon>
  );
};

export default CategList;

const CategCon = styled.div`
  height: 25em;
`;

const CategWrap = styled.div`
 margin: 20px 0;
 h3{
  color: ${props => props.categColor};
 }
 /* padding: 20px 0; */
`
