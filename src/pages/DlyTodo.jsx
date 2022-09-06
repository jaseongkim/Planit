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

    setSelectedDate({
      year: year,
      month: parsedMonth,
      day: day
    ,})

  };

  // adding a new todo
  const addTodo = (categId) => {

    if(categId===0){
      formFields[0].push({ todo: '', memo: ''})
    }
    else if(categId>=1 && !formFields[categId]?.length >= 1){
      formFields[categId] = [{ todo: '', memo: ''}]
    }
    else if(categId>=1 && formFields[categId].length >= 1) {
         formFields[categId].push([{ todo: '', memo: ''}])
    }

    setFormFields([...formFields])
  }

  const onSubmitField = (index) => {
    let data = [...formFields];
    // console.log(data[index])
  }

  return(
    <>
    {console.log(`${selectedDate.year}-${selectedDate.month}-${selectedDate.day}`)}
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
           <TodoCon key={categ.id}>
          <button onClick={()=>addTodo(categ.id-1)}>{categ.categoryName}</button>
          <TodoList 
            formFields={formFields} 
            setFormFields={setFormFields}
            selectedDate={selectedDate}
            categId={categ.id-1}
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





