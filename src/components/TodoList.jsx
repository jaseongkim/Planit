import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { onChangeTodo, createTodoThunk } from "../redux/modules/categTodoSlice.js";


const TodoList = ({ categId, todos, categIndex}) => {

  // Redux : dispatch
  const dispatch = useDispatch();

  console.log("Checking todos", todos)

  // console.log("Check categories", categories)

  // const [todoTitle, seTodoTitle] = useState(categories);

  // console.log("Checking formFields", formFields)
  // console.log("Checking todos",todos,"checking cateId", categId)

  // Hook
  const [showMemo, setShowMemo] = useState(true)

  // // Specifying todo & memo info a new todo
  const handleFormChange = (index, event) => {
    let data = [...todos];

    // console.log("Checking todo", todos)
    // console.log("Checking data", data)
    // console.log("Check data",data)
    // // Updating 0 index's formFields
    console.log("Checking categIndex",categIndex)
    // data[categId][index][event.target.name] = event.target.value;
    console.log("Checking todo", data[index])
    console.log("Checking value", event.target.value)
    data[index] = {
      [event.target.name] : event.target.value,   
    }
    // todos[2][event.target.name] = event.target.value;
    // console.log("Checkig value", todos[2]['title'])
    // console.log("Checking",event.target.name)
    // console.log("After data index",data)
    // setFormFields(data);
    console.log("Checking after todo", data[index].title)
    // console.log("Checking here", todos[2])
    // console.log("Checking here", todos[index])
    // console.log("Hello", categories)

    const chgTodoObj = {
      todoIndex: index,
      categIndex: categIndex,
      chgTodoTitle : data[index].title
    }

    dispatch(onChangeTodo(chgTodoObj));
  };

  // When Outfocused, input will be disabled
  const onCheckFocus = (index,categId) => {
    // const parsedDate = `${selectedDate.year}년-${selectedDate.month}월-${selectedDate.day}일`;
    console.log("Check onFocus todo", todos[index].title)
    // console.log("Check formField ",formFields[index][categId].todo)
    const addTodoObj = {
      categId: categId,
      categIndex: categIndex,
      todoIndex: index,
      todoReq: {
        title: todos[index].title,
        dueDate: "2022-09-03"
      }
    }
    dispatch(
      createTodoThunk({
        addTodoObj
      })
    );
    // document.getElementById(`disable${index}${categId}`).disabled = "true";
  };

  // When the button is clicked, the memo will be disappeared 
  const onShowMemo = (index) => {
    document.getElementById(`showMemo${index}${categId}`).style.display = (!showMemo ? "none" : "block");
    setShowMemo(!showMemo)
  }

  return (
    <TodoListCon>
      {todos.map((inputs, index) => {
        return (
          <TodoItemCon key={`${index}${categId}`}>
            <TodoTitle> 
              <input type="checkbox" />
              <div>
                <input
                  id={`disable${index}${categId}`}
                  name="title"
                  type="text"
                  placeholder="todo"
                  value={inputs.title}
                  onChange={(event) => handleFormChange(index, event)}
                  onBlur={() => onCheckFocus(index,categId)}
                />
                <button type="button" onClick={() => onShowMemo(index)}>
                  토글
                </button>
              </div>
            </TodoTitle>
            {/* <MemoWrap id={`showMemo${index}${categId}`}>
              <textarea
                name="memo"
                type="text"
                placeholder="memo"
                value={inputs.memo}
                // onChange={(event) => handleFormChange(index, event)}
                //  onBlur={() => checkonFocus(index)}
              ></textarea>
              <div>
                <button>날짜변경</button>
                <button>삭제</button>
              </div>
            </MemoWrap> */}
          </TodoItemCon>
          )
      })}
    </TodoListCon>
  );
};

export default TodoList;

const TodoListCon = styled.ul`
  margin-top: 10px;
  padding: 0 10px;
  border: 3px solid black;
`;

const TodoItemCon = styled.li`
  border: 3px solid red;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const TodoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid green;

  div {
  }
`;

const MemoWrap = styled.div`
  display: none;

  margin-top: 5px;
  padding: 5px 0;

  textarea {
    width: 100%;
    height: 100px;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }

  button {
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;
