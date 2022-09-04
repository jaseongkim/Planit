import React, {useState,useEffect} from "react";
import DatePicker from "react-horizontal-datepicker";
import Header from "../components/Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategThunk } from "../redux/modules/categorySlice.js";
import TodoList from "../components/TodoList";

const DlyTodo = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const categories = useSelector((state) => state.category.categories);

  // useEffect
  useEffect(() => {
    dispatch(getCategThunk());
  }, []);

  // Hook
  const [formFields, setFormFields] = useState([
    { todo: '', memo: ''}
  ])
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

    setSelectedDate({
      year: year,
      month: parsedMonth,
      day: day
    ,})

    console.log("month is "+ parsedMonth)
    console.log("day is " + day)
    console.log("year is " + year)
  };

  // adding a new todo
  const addTodo = () => {
    setFormFields([...formFields, { todo: '',memo: ''}])
  }

  const onSubmitField = (index) => {
    let data = [...formFields];
    console.log(data[index])
  }

  return(
    <>
      <Header/>
      <div>
        <DatePicker 
          endDate={100}
          getSelectedDay={selectedDay}>
        </DatePicker>
      </div>
      <Section>
        <TodoDailyStats></TodoDailyStats>
       {categories.map((categ) => {
          return( 
           <TodoCon>
          <button onClick={addTodo}>{categ.categoryName}</button>
          <TodoList 
            formFields={formFields} 
            setFormFields={setFormFields}
            selectedDate={selectedDate}
          >
          </TodoList>
        </TodoCon> 
        )})}   
      </Section>
    </>
  );
};

export default DlyTodo;

const Section = styled.div`
  padding: 15px;
`;

const TodoDailyStats = styled.div``;

const TodoCon = styled.div`
  margin-top: 10px;
`;





