import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeTodo,
  createTodoThunk,
  updateTodoThunk
} from "../redux/modules/categTodoSlice.js";


const TodoList = ({ categId, todos, categIndex, onClickedSheet, clickedTodo }) => {
  
  // Redux : dispatch
  const dispatch = useDispatch();

  // Hook : whether to show memo
  const [showMemo, setShowMemo] = useState(true);

  // // Specifying todo & memo info a new todo
  const handleFormChange = (index, event) => {
    let data = [...todos];

    data[index] = {
      [event.target.name]: event.target.value,
    };

    const chgTodoObj = {
      todoIndex: index,
      categIndex: categIndex,
      chgTodoTitle: data[index].title,
    };

    dispatch(onChangeTodo(chgTodoObj));
  };

  // When Outfocused, input will be disabled
  const onCheckFocus = (index, categId, inputs) => {
    // const parsedDate = `${selectedDate.year}년-${selectedDate.month}월-${selectedDate.day}일`;
    // console.log("Check onFocus todo", todos[index].title);
    // console.log("Checking inputs", inputs)
    
    if(inputs == undefined){
      const addTodoObj = {
        categId: categId,
        categIndex: categIndex,
        todoIndex: index,
        todoReq: {
          title: todos[index].title,
          dueDate: "2022-09-03",
        },
      };

    dispatch(
      createTodoThunk({
        addTodoObj,
      })
    );
  }
  else{
    const updateTodoObj = {
      todoId: inputs.todoId,
      categIndex: categIndex,
      todoIndex: index,
      todoReq: {
        title: todos[index].title,
        dueDate: "2022-09-03",
      },
    }
    
    dispatch(
      updateTodoThunk({
        updateTodoObj
      })
    );
    document.getElementById(`disable${clickedTodo.todoInfo.todoId}`).disabled = true;
  }
  };

  // When the button is clicked, the memo will be disappeared
  // const onShowMemo = (index) => {
  //   document.getElementById(`showMemo${index}${categId}`).style.display =
  //     !showMemo ? "none" : "block";
  //   setShowMemo(!showMemo);
  // };

  const [isChecked, setIsChecked] = useState(false);

  const onhandleCheckBox = (todo) => {
    // alert("Hello")
    // console.log("Checking todoId", todoId)
    // document.getElementById(`checkbox${todoId}`).checked

    // console.log(document.getElementById(`checkbox${todoId}`).defaultChecked)
    // alert("Hello")
    // document.getElementById(`checkbox${todoId}`).checked = false
    // console.log("Check", todoId)

    // console.log(document.getElementById(`checkbox${todoId}`).checked)
    setIsChecked(!isChecked);
    console.log("Check checkbox ", todo )
  }

  return (
    <TodoListCon>
      {todos.map((inputs, index) => {
        return (
          <TodoItemCon key={`${inputs.todoId}`}>
            <TodoTitle>
              <input
                id={`checkbox${inputs.todoId}`} 
                type="checkbox"
                // onChange={() => onhandleCheckBox(inputs.todoId)}
                onChange={() => onhandleCheckBox(inputs)}
                checked={isChecked}
               />
              <div>
                {inputs.todoId === undefined ? 
                <input
                  id={`disable${inputs.todoId}`}
                  name="title"
                  type="text"
                  placeholder="todo"
                  value={inputs.title}
                  onChange={(event) => handleFormChange(index, event)}
                  onBlur={() => onCheckFocus(index, categId)}
                /> : 
                <input
                id={`disable${inputs.todoId}`}
                name="title"
                type="text"
                placeholder="todo"
                value={inputs.title}
                onChange={(event) => handleFormChange(index, event)}
                onBlur={() => onCheckFocus(index, categId, inputs)}
                disabled
              />
                }
                <button type="button" onClick={() => onClickedSheet(inputs, index, categIndex)}>
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
        );
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

