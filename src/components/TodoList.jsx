import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createTodoThunk } from "../redux/modules/todoSlice";

const TodoList = ({ formFields, setFormFields, selectedDate }) => {

  // Redux : dispatch
  const dispatch = useDispatch();

  // Hook
  const [showMemo, setShowMemo] = useState(true)

  // Specifying todo & memo info a new todo
  const handleFormChange = (index, event) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  // When Outfocused, input will be disabled
  const onCheckFocus = (index) => {
    const parsedDate = `${selectedDate.year}년-${selectedDate.month}월-${selectedDate.day}일`;
    dispatch(
      createTodoThunk({
        title: formFields[index].todo,
        dueDate: parsedDate,
      })
    );
    document.getElementById(`disable${index}`).disabled = "true";
  };

  // When the button is clicked, the memo will be disappeared 
  const onShowMemo = (index) => {
    document.getElementById(`showMemo${index}`).style.display = (!showMemo ? "none" : "block");
    setShowMemo(!showMemo)
  }

  return (
    <TodoListCon>
      {formFields.map((input, index) => {
        return (
          <TodoItemCon key={index}>
            <TodoTitle>
              <input type="checkbox" />
              <div>
                <input
                  id={`disable${index}`}
                  name="todo"
                  type="text"
                  placeholder="todo"
                  value={input.todo}
                  onChange={(event) => handleFormChange(index, event)}
                  onBlur={() => onCheckFocus(index)}
                />
                <button type="button" onClick={() => onShowMemo(index)}>
                  토글
                </button>
              </div>
            </TodoTitle>
            <MemoWrap id={`showMemo${index}`}>
              <textarea
                name="memo"
                type="text"
                placeholder="memo"
                value={input.memo}
                onChange={(event) => handleFormChange(index, event)}
                //  onBlur={() => checkonFocus(index)}
              ></textarea>
              <div>
                <button>날짜변경</button>
                <button>삭제</button>
              </div>
            </MemoWrap>
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
