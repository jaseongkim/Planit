import React from "react";
import styled from "styled-components";

export default function ToInput(props) {
  return (
    <>
      <Container>
        <input value={props.todo.todoContent} />
        {/* <InputBtn>버튼</InputBtn> */}
        <InputBtn>버튼</InputBtn>
      </Container>
    </>
  );
}

const Container = styled.div`
  border: 1px solid black;
  display: flex;
`;

const InputBtn = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 10px;
`;
