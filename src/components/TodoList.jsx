import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  onChangeTodo,
  createTodoThunk,
  updateTodoTiThunk,
  updateTodoCkThunk,
} from "../redux/modules/categTodoSlice.js";

const TodoList = ({
  categId,
  todos,
  categIndex,
  onClickedSheet,
  clickedTodo,
  selectedDate,
}) => {
  // Redux : dispatch
  const dispatch = useDispatch();

  // Specifying todo & memo info a new todo
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

  // When Outfocused, input will be disabled => making empty UX
  // => if there is an input in the server, then update the pre-defined title.
  const onCheckTiOutFocus = (index, categId, inputs) => {
    if (inputs === undefined) {
      const addTodoObj = {
        categId: categId,
        categIndex: categIndex,
        todoIndex: index,
        todoReq: {
          title: todos[index].title,
          dueDate: selectedDate,
        },
      };

      dispatch(
        createTodoThunk({
          addTodoObj,
        })
      );
    } else {
      const updateTodoTiObj = {
        todoId: inputs.todoId,
        categIndex: categIndex,
        todoIndex: index,
        todoReq: {
          title: todos[index].title,
          dueDate: selectedDate,
        },
      };

      dispatch(
        updateTodoTiThunk({
          updateTodoTiObj,
        })
      );
      document.getElementById(
        `disable${clickedTodo.todoInfo.todoId}`
      ).disabled = true;
    }
  };

  // Changing the clicked checkbox's check status
  const onhandleCheckBox = (todo, categIndex, todoIndex) => {
    const updateTodoCkObj = {
      todoId: todo.todoId,
      categIndex: categIndex,
      todoIndex: todoIndex,
      todoReq: {
        isAchieved: document.getElementById(`checkbox${todo.todoId}`).checked,
      },
    };

    if (document.getElementById(`checkbox${todo.todoId}`).checked === true) {
      dispatch(updateTodoCkThunk({ updateTodoCkObj }));
    } else {
      dispatch(updateTodoCkThunk({ updateTodoCkObj }));
    }
  };
  return (
    <TodoListCon>
      {todos.map((inputs, index) => {
        return (
          <TodoItemCon key={`${inputs.todoId}`}>
            <TodoTitle>
              <CheckTxtboxWrap>
                {inputs.isAchieved === true ? (
                  <input
                    id={`checkbox${inputs.todoId}`}
                    type="checkbox"
                    value=""
                    onChange={() => onhandleCheckBox(inputs, categIndex, index)}
                    checked={true}
                  />
                ) : (
                  <input
                    id={`checkbox${inputs.todoId}`}
                    type="checkbox"
                    value=""
                    onChange={() => onhandleCheckBox(inputs, categIndex, index)}
                    checked={false}
                  />
                )}
                {inputs.todoId === undefined ? (
                  <input
                    id={`disable${inputs.todoId}`}
                    name="title"
                    type="text"
                    placeholder="todo"
                    value={inputs.title}
                    onChange={(event) => handleFormChange(index, event)}
                    onBlur={() => onCheckTiOutFocus(index, categId)}
                  />
                ) : (
                  <input
                    id={`disable${inputs.todoId}`}
                    name="title"
                    type="text"
                    placeholder="todo"
                    value={inputs.title}
                    onChange={(event) => handleFormChange(index, event)}
                    onBlur={() => onCheckTiOutFocus(index, categId, inputs)}
                    disabled
                  />
                )}
              </CheckTxtboxWrap>
              <button
                type="button"
                onClick={() => onClickedSheet(inputs, index, categIndex)}
              >
                토글
              </button>

            </TodoTitle>
          </TodoItemCon>
        );
      })}
    </TodoListCon>
  );
};

export default TodoList;

const TodoListCon = styled.ul`
  margin-top: 10px;
  padding: 0;
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
`;


const CheckTxtboxWrap = styled.div`
  input:last-child{
    margin-left: 0.5em;
  }
`

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
