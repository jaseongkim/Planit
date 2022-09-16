import React, {useState,useEffect} from "react";
import DatePicker from "react-horizontal-datepicker";
import Header from "../components/Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategThunk } from "../redux/modules/categorySlice.js";
import TodoList from "../components/TodoList";

const DlyTodoTemp = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  console.log("This is before useSelector")
  // Redux : useSelector
  const categories = useSelector((state) => state.category.categories);
  console.log("This is after useSelector")

  // Object : to get the date from the vertical calendar
  const selectedDateObj = {
    year: "",
    month: "",
    day: ""
  }

    const onAddTodoHandler = (todos) => {
        
    };

  // UseEffect : getting categories & to-do lists 
  useEffect(() => {
    console.log("Hi this is useEffect")
  },[]);

  // Hook : 2d Array formfields
  const [formFields, setFormFields] = useState(
    [[]]
  )
  
  // Hook : getting current date from the calendar
  const [selectedDate, setSelectedDate] = useState({
    year: "",
    month: "",
    day: ""
  })

  // Function to parse string month to int month
  const parseMonth = (mm) => {
    const monthsShort = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12',
    };

    return monthsShort[mm]
  }
  
  // Getting date from the vertical calendar
  const selectedDay = (val) => {
    const strData = val.toString()
    const month = strData.substring(4, 7)
    const day = strData.substring(8,10)
    const year = strData.substring(11,15)
    const parsedMonth = parseMonth(month)

    console.log("This is selectedDay function")

    selectedDateObj.year = year
    selectedDateObj.day = day
    selectedDateObj.month = parsedMonth

    console.log("This is before dispatch")
    const concatSelDate = `${selectedDateObj.year}-${selectedDateObj.month}-${selectedDateObj.day}`
    dispatch(getCategThunk(concatSelDate));
    console.log("This is after dispatch")
  };

  const onSubmitField = (index) => {
    let data = [...formFields];
    // console.log(data[index])
  }

  return(
    <> 
      {console.log("This is return")}
      <Header/>
      <div>
        <DatePicker 
          endDate={100}
          getSelectedDay={selectedDay}>
        </DatePicker>
      </div>
      <Section>
        <TodoDailyStats></TodoDailyStats>
       {categories.map((category, index) => {
          return( 
           <TodoCon key={index}>
            <TodoBtn 
                onClick={() => onAddTodoHandler(category.todos)}
                btnColor={category.categoryColor}
                >
                {category.categoryName}
            </TodoBtn>
            <TodoList
                formFields={formFields}
                setFormFields={setFormFields}
                selectedDate={selectedDate}
                categId={category.categoryId}
                todos={category.todos}
            >
            </TodoList>
        </TodoCon> 
        )})}   
      </Section>
    </>
  );
};

export default DlyTodoTemp;

const Section = styled.div`
  padding: 15px;
`;

const TodoDailyStats = styled.div``;

const TodoCon = styled.div`
  margin-top: 10px;
`;

const TodoBtn = styled.button`
  background-color: ${props => props.btnColor};
  font-size: 0.9em;
  color: white;
`




