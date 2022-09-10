import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/toSlice";
import ToInput from "./ToInput";

let num = 0;
export default function CateBox(props) {
  const todoList = useSelector((state) => state.toSlice.todo);
  // console.log(todoList);

  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const onClickHandler = () => {
    const todo = {
      allId: num,
      categoryId: props.cate.cateId,
      todoId: 0,
      todoContent: content,
    };
    dispatch(addTodo(todo));
    num++;
  };

  return (
    <>
      <Container>
        <CateName>{props.cate.cateName}</CateName>
        <TodoPlus onClick={onClickHandler}>+</TodoPlus>
      </Container>
      {todoList.map((todo) => {
        if (todo.categoryId === props.cate.cateId) {
          return <ToInput todo={todo} key={todo.allId} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

const Container = styled.div`
  width: 100px;
  height: auto;
  border: 3px solid black;
  display: flex;
`;

const CateName = styled.div`
  text-align: center;
`;

const TodoPlus = styled.div`
  margin-left: 5px;
  text-align: center;
  cursor: pointer;
`;
