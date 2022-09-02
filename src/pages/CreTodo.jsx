import React, { useRef } from "react";
import DatePicker from "react-horizontal-datepicker";
import Header from "../components/Header";
import styled from "styled-components";
import TodoList from "../components/TodoList"

const CreTodo = () => {

  const inputEl = useRef(null);

  const selectedDay = (val) => {
    console.log("checking ", val);
  };

  const addCategory = () => {
    const firstInput = document.createElement("input")
    document.querySelector("TodoList").appendChild(firstInput)
    alert("hello")
  }

  return (
    <>
      <Header />
      <div>
        <DatePicker getSelectedDay={selectedDay}></DatePicker>
      </div>
      <Section>
        <TodoDailyStats></TodoDailyStats>
        <TodoCon>
          <button onClick={addCategory}>운동</button>
        <TodoList ref={inputEl}/>
        </TodoCon>
      </Section>
    </>
  );
};

export default CreTodo;

const Section = styled.div`
  padding: 15px;
`;

const TodoDailyStats = styled.div``;
const TodoCon = styled.div`
  margin-top: 10px;
`;






