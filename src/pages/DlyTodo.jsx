// React
import React, { useState, useEffect, useRef} from "react";
// ModalSheet
import Sheet from "react-modal-sheet";
// Calendar
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getCategThunk,
  addMtyTodo,
  deleteTodoThunk,
  updateTodoMemoThunk
} from "../redux/modules/categTodoSlice.js";
// Styled-Component
import styled from "styled-components";
// React Component
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import Circle from "../element/Circle.jsx";

const DlyTodo = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  // Hook : whether to show Modal sheet
  const [isOpen, setOpen] = useState(false);

  // Hook : To get the selected date from the calendar
  const [dateValue, setDateValue] = useState(new Date());

  // Hook : TO get the cliced Memo info from the TodoList
  const [clickedMemo, setClickedMemo] = useState("")

  // Hook : To get the clicked Cagegory index
  const [clickedCategIndex, setClickedCategIndex] = useState("");

  // Hook : To get the clicked todo info & index from the TodoList
   const [clickedTodo, setClickedTodo] = useState({
    todoInfo: "",
    todoIndex: "",
  });

  // UseRef : To get the selected date from the calendar
  const concatSelDate = useRef();

  // Redux : useSelector
  const categories = useSelector((state) => state.categTodoSlice.categories);

  // Function to open sheetModal & Getting clicked todo Info & index as well as the todo index
  const onClickedSheet = (inputs, index, categIndex) => {
    setOpen(true);
    setClickedTodo({
      todoInfo: inputs,
      todoIndex: index,
    });
    setClickedMemo(inputs.memo)
    setClickedCategIndex(categIndex);
  };

  // Function to parse string month to int month
  const parseMonth = (mm) => {
    const monthsShort = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    return monthsShort[mm];
  };

  // UseEffect : getting categories & to-do lists as well as date from the calendar
  useEffect(() => {
    const strData = dateValue.toString();
    const month = strData.substring(4, 7);
    const day = strData.substring(8, 10);
    const year = strData.substring(11, 15);
    const parsedMonth = parseMonth(month);

    concatSelDate.current = `${year}-${parsedMonth}-${day}`;

    dispatch(getCategThunk(concatSelDate.current));
  }, [dateValue]);

  // Adding a new todo
  const addTodo = ({ input, index }) => {
    if(input.todos[input.todos.length-1]?.title !== ""){
      const mtyCateg = {
      categIndex: index,
      categReq: {
        title: "",
        dueDate: concatSelDate.current,
      },
    };
    dispatch(addMtyTodo(mtyCateg));
  }
    
  };

  // Enabling to edit todo by closing the modalSheet
  const clickEditTodo = () => {
    setOpen(false);
    document.getElementById(
      `disable${clickedTodo.todoInfo.todoId}`
    ).disabled = false;
    document.getElementById(`disable${clickedTodo.todoInfo.todoId}`).focus();
  };

  // Deleting the clicked todo by closing the modalSheet
  const clickDeleteTodo = () => {
    setOpen(false);

    const clickedTodoId = clickedTodo.todoInfo.todoId;

    const deleteTodoObj = {
      todoId: clickedTodoId,
      todoIndex: clickedTodo.todoIndex,
      categIndex: clickedCategIndex,
    };

    dispatch(deleteTodoThunk(deleteTodoObj));
  };

  // Updating memo input
  const onChangeMemoHandler = (e) => {
    setClickedMemo(e.target.value)
  }

  // When outfocused, update todo's memo
  const onCheckMemoOutFocus = () => {

    const clickedTodoId = clickedTodo.todoInfo.todoId;

    const updateTodoMemoObj = {
      todoId: clickedTodoId,
      todoIndex: clickedTodo.todoIndex,
      categIndex: clickedCategIndex,
      todoReq: {
        memo: clickedMemo
      }
    };

    dispatch(updateTodoMemoThunk({updateTodoMemoObj}));
  }

  return (
    <>
      <Header />
      <CalendarWrap>
        <Circle></Circle>
        <Calendar onChange={setDateValue} value={dateValue} />
      </CalendarWrap>
      <Section>
        {categories.map((input, index) => {
          return (
            <TodoCon key={index}>
              <TodoBtn
                onClick={() => addTodo({ input, index })}
                btnColor={input.categoryColor}
              >
                {input.categoryName}
              </TodoBtn>
              <hr/>
              <TodoList
                selectedDate={concatSelDate.current}
                clickedTodo={clickedTodo}
                onClickedSheet={onClickedSheet}
                categId={input.categoryId}
                todos={input.todos}
                categIndex={index}
              ></TodoList>
            </TodoCon>
          );
        })}
      </Section>

      <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <CustomSheet.Container>
          <CustomSheet.Header />
          <CustomSheet.Content>
            <ContentHeader>
            <div className="todo-title">{clickedTodo.todoInfo.title}</div>
            <button
              onClick={() => {
                clickEditTodo();
              }}
            >
              수정
            </button>
            </ContentHeader>
            <textarea 
              name="memo"
              value={clickedMemo}
              onChange={onChangeMemoHandler}
              onBlur={() => onCheckMemoOutFocus()}
            >          
              </textarea>
            <ContentFooter>
            <button
              onClick={() => {
                clickDeleteTodo();
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                clickDeleteTodo();
              }}
            >
              날짜변경하기
            </button>
            </ContentFooter>
          </CustomSheet.Content>
        </CustomSheet.Container>

        <Sheet.Backdrop />
      </CustomSheet>
    </>
  );
};

export default DlyTodo;

const Section = styled.div`
  padding: 15px;
  position: relative;
  border: 3px solid blue;
`;

const CalendarWrap = styled.div`
  padding: 15px;
`;

const TodoCon = styled.div`
  margin-top: 10px;

  hr{
    margin: 0.5em 0;
  }
`;

const TodoBtn = styled.button`
  background-color: ${(props) => props.btnColor};
  font-size: 0.9em;
  color: white;
`;

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
    border: 3px solid #ffffff;
  }

  .react-modal-sheet-container {
    max-height: 400px;
    right: 0;
    margin: 0 auto;
    max-width: 375px;
  }

  .react-modal-sheet-header {
    /* custom styles */
  }

  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }

  .react-modal-sheet-content {
    /* custom styles */
    padding: 0 5% 5% 5%;

    textarea{
      width: 100%;
      height: 9.5em;
      resize: none
    }
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;

  div{
    font-size: 1.3em;
    font-weight: bold;
  }
`
const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;

  button:first-child{
    margin: 1em 0
  }
`