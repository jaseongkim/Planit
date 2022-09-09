import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCate } from "../redux/modules/cateSlice";
import CateBox from "./CateBox";

let num = 0;

export default function Todo() {
  const cateList = useSelector((state) => state.cateSlice.cate);

  const dispatch = useDispatch();

  const [cateName, setCateName] = useState("");

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setCateName(value);
  };

  const onClickHandler = () => {
    const cate = {
      cateId: num,
      cateName: cateName,
    };
    dispatch(addCate(cate));
    setCateName("");
    num += 1;
  };

  return (
    <>
      <input type="text" value={cateName} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>카테고리 추가 버튼</button>
      {cateList.map((cate) => {
        return <CateBox cate={cate} key={cate.cateId} />;
      })}
    </>
  );
}
