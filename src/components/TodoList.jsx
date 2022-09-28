// React
import React, { useState, useEffect, useRef } from "react";
// Styled Component
import styled from "styled-components";
// Redux
import { useDispatch } from "react-redux";
import {
  delMtyTodo,
  onChangeTodo,
  createTodoThunk,
  updateTodoTiThunk,
  updateTodoCkThunk,
} from "../redux/modules/categTodoSlice.js";
// React Icons
import { IoIosMore } from "react-icons/io";
// Imgs
import { check_icon } from "../static/images";

const TodoList = ({
  categId,
  todos,
  categIndex,
  onClickedSheet,
  clickedTodo,
  selectedDate,
  parsedToday,
  parsedCurrDate,
}) => {
  // const checkedRef = useRef()
  // const uncheckedRef = useRef()

  // Redux : dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("This is useEffect from the TodoList")
  }, []);

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

  // If it is an empty inputs, send dispatch data
  // else delete the empty UX
  const mtyTiOutFocus = (inputs, index, categId) => {
    if (inputs.title === "") {
      const mtyTodo = {
        todoIndex: index,
        categIndex: categIndex,
      };
      dispatch(delMtyTodo(mtyTodo));
    } else {
      const addTodoObj = {
        categId: categId,
        categIndex: categIndex,
        todoIndex: index,
        todoReq: {
          title: inputs.title,
          dueDate: selectedDate,
        },
      };

      dispatch(
        createTodoThunk({
          addTodoObj,
        })
      );

      document.getElementById(
        `disable${clickedTodo.todoInfo.todoId}`
      ).disabled = true;
    }
  };

  // If there is an input that has been created before,
  // update from old title to new one
  const naMtyTiOutFocus = (inputs, index) => {
    const updateTodoTiObj = {
      todoId: inputs.todoId,
      categIndex: categIndex,
      todoIndex: index,
      todoReq: {
        title: inputs.title,
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
  };

  // Changing the clicked checkbox's check status
  const onhandleCheckBox = (todo, categIndex, todoIndex) => {
    // console.log("Checking checkedRef useRef", checkedRef.current.id)
    // console.log("Checking uncheckRefuseRef", uncheckedRef.current.id)

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
      {/* {console.log("This is return in TodoList")} */}
      {todos.map((inputs, index) => {
        return (
          <TodoItemCon key={`${inputs.todoId}`}>
            <TodoTitle>
              <CheckTxtboxWrap>
                <CustomCheck>
                  <input
                    id={`checkbox${inputs.todoId}`}
                    type="checkbox"
                    onChange={() => onhandleCheckBox(inputs, categIndex, index)}
                    disabled={parsedCurrDate < parsedToday ? true : false}
                  />
                  <div></div>
                </CustomCheck>
                {/* {console.log("Check inputs", inputs)} */}
                {inputs.todoId === undefined ? (
                  <input
                    autoFocus
                    maxLength={20}
                    id={`disable${inputs.todoId}`}
                    name="title"
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={inputs.title}
                    onChange={(event) => handleFormChange(index, event)}
                    onBlur={() => mtyTiOutFocus(inputs, index, categId)}
                  />
                ) : (
                  <input
                    id={`disable${inputs.todoId}`}
                    name="title"
                    type="text"
                    placeholder="할 일을 입력하세요"
                    value={inputs.title}
                    onChange={(event) => handleFormChange(index, event)}
                    onBlur={() => naMtyTiOutFocus(inputs, index)}
                    disabled
                  />
                )}
              </CheckTxtboxWrap>
              <button
                type="button"
                onClick={() => onClickedSheet(inputs, index, categIndex)}
              >
                <IoIosMore></IoIosMore>
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
  margin: 8px 0 0;
  padding: 8px 0;
  border-top: 1px solid #b1bdcf;
`;

const TodoItemCon = styled.li`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

const TodoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 20px;
    height: 18px;
    line-height: 1;
    font-size: 20px;
    color: #d9d9d9;
    background: transparent;
    border: none;
  }
`;

const CheckTxtboxWrap = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 28px);

  input[type="text"] {
    width: calc(100% - 24px);
    height: 28px;
    font-size: 14px;
    color: #fff;
    margin-left: 8px;
    background: transparent;
    border: none;

    &:focus {
      border-bottom: 1px solid #b1bdcf;
    }
    &::placeholder {
      color: #fff;
    }
  }
`;

const CustomCheck = styled.div`
  position: relative;
  width: 16px;
  height: 16px;

  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;

    &:checked + div {
      background-color: #fff;
      background-image: url(${check_icon});
      background-repeat: no-repeat;
      background-position: center;
      opacity: 100%;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #aabce0;
    opacity: 40%;
    border-radius: 100px;
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
