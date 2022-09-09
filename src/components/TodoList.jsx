import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createTodoThunk } from "../redux/modules/todoSlice";

const TodoList = ({ formFields, setFormFields, selectedDate, categId, todos }) => {

  // Redux : dispatch
  const dispatch = useDispatch();

  
  console.log("Checking formFields", formFields)
  // console.log("Checking todos",todos,"checking cateId", categId)

  // Hook
  const [showMemo, setShowMemo] = useState(true)

  // Specifying todo & memo info a new todo
  const handleFormChange = (index, event) => {
    let data = [...formFields];
    // console.log("Check data",data)
    // Updating 0 index's formFields
    data[categId][index][event.target.name] = event.target.value;
    // console.log("After data index",data)
    setFormFields(data);
  };

  // When Outfocused, input will be disabled
  const onCheckFocus = (index,categId) => {
    const parsedDate = `${selectedDate.year}년-${selectedDate.month}월-${selectedDate.day}일`;

    // console.log("Check formField ",formFields[index][categId].todo)
    dispatch(
      createTodoThunk({
        title: formFields[index][categId].todo,
        dueDate: parsedDate,
      })
    );
    document.getElementById(`disable${index}${categId}`).disabled = "true";
  };

  // When the button is clicked, the memo will be disappeared 
  const onShowMemo = (index) => {
    document.getElementById(`showMemo${index}${categId}`).style.display = (!showMemo ? "none" : "block");
    setShowMemo(!showMemo)
  }

  return (
    <TodoListCon>
      {/* {console.log("TodoList render",formFields[0])} */}
      {/* {console.log("Checking clicked id Num",categId)} */}
     {/* {console.log("Checking categId",categId)} */}
     {console.log("Checking formFields", formFields)}
     {/* {console.log("Checking formFields[categId]", formFields)}  */}
      {formFields[categId]?.map((inputs, index) => {
        // console.log("Check inputs",inputs,"Check index",index)
        return (
          // <>
          // {inputs.map((input) => {
          // return(
          <TodoItemCon key={`${index}${categId}`}>
            <TodoTitle> 
              <input type="checkbox" />
              <div>
                <input
                  id={`disable${index}${categId}`}
                  name="todo"
                  type="text"
                  placeholder="todo"
                  value={inputs.todo}
                  onChange={(event) => handleFormChange(index, event)}
                  onBlur={() => onCheckFocus(index,categId)}
                />
                <button type="button" onClick={() => onShowMemo(index)}>
                  토글
                </button>
              </div>
            </TodoTitle>
            <MemoWrap id={`showMemo${index}${categId}`}>
              <textarea
                name="memo"
                type="text"
                placeholder="memo"
                value={inputs.memo}
                onChange={(event) => handleFormChange(index, event)}
                //  onBlur={() => checkonFocus(index)}
              ></textarea>
              <div>
                <button>날짜변경</button>
                <button>삭제</button>
              </div>
            </MemoWrap>
          </TodoItemCon>
          )
        // })
        // } 
        // </>
        // );
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
