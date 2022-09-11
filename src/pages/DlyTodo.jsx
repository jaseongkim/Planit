import React, {useState,useEffect} from "react";
import DatePicker from "react-horizontal-datepicker";
import Header from "../components/Header";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCategThunk, addMtyTodo } from "../redux/modules/categTodoSlice.js";
import { createTodoThunk } from "../redux/modules/todoSlice.js"
import TodoList from "../components/TodoList";

const DlyTodo = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  console.log("This is before useSelector")
  // Redux : useSelector

  const categories = useSelector((state) => state.categTodoSlice.categories);
  // console.log("Check categories", categories)
  // console.log("This is after useSelector")

  // Object : to get the date from the vertical calendar
  const selectedDateObj = {
    year: "",
    month: "",
    day: ""
  }

  // UseEffect : getting categories & to-do lists 
  useEffect(() => {
    // const concatSelDate = `${selectedDateObj.year}-${selectedDateObj.month}-${selectedDateObj.day}`
    // console.log("This is before dispatch")
    // setFormFields(categories);
    dispatch(getCategThunk());
    // console.log("This is after dispatch")
    // setFormFields(categories)
    // console.log("Checking categorie in useEffect", categories)
    // console.log("Hi this is useEffect")
  },[]);

  // console.log("Checking categories", categories)
  // console.log("Checking categ's todo", categories[0]?.todos[0].title,"Checking categ's memo", categories[0]?.todos[0].memo)

  // Hook : 2d Array formfields
  const [todoTitle, seTodoTitle] = useState("");

  // for(const categ in categories){
  //   console.log("Checking categ", categories[categ])
  //   let count = 1;
  //   for( const todo in categories[categ].todos){
  //     // console.log("Checking categ", categ,"checking todo", todo)
  //       if(categ == 0){
  //         // console.log("Checking this is todo")
  //       // if(categ == 2){
  //       //   console.log("Checking this is todo")
  //       //   // break;
  //       // }
  //       // console.log("Checking", categ, "todo", todo  )
  //       formFields[0].push({ todo: categories[categ].todos[todo].title, memo: categories[categ].todos[todo]?.memo })
        
  //       // console.log("Checking", count)
  //     }

  //     else if(categ >= 1){
  //       if(categ == count+1){
  //         console.log("Checking ", count+1)
  //         break;
  //       }
  //       console.log("checking categ", categ, "Checking todo", todo)
  //       formFields[categ] = ([{ todo: categories[1].todos[0].title, memo: "" }])
  //       // if(formFields[categ].length>=1){
  //       // }
  //     }
  //   }
  // }


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
  // const selectedDay = (val) => {
  //   const strData = val.toString()
  //   const month = strData.substring(4, 7)
  //   const day = strData.substring(8,10)
  //   const year = strData.substring(11,15)
  //   const parsedMonth = parseMonth(month)

  //   console.log("This is selectedDay function")

  //   selectedDateObj.year = year
  //   selectedDateObj.day = day
  //   selectedDateObj.month = parsedMonth

  //   console.log("This is before dispatch")
  //   const concatSelDate = `${selectedDateObj.year}-${selectedDateObj.month}-${selectedDateObj.day}`
  //   dispatch(getCategThunk(concatSelDate));
  //   console.log("This is after dispatch")
  // };
  


  // Adding a new todo
  const addTodo = ({input,index}) => {
   
    // console.log("Checking props", input.categoryId )
    // console.log("Checking index", index)

    const categ = {
      categID: input.categoryId, 
      categIndex: index,
      categReq : {
        title : todoTitle,
        dueDate : "2022-09-03",
      }
    }

    const mtyCateg = {
      categIndex: index,
      categReq : {
        title : "",
        dueDate : "2022-09-03"
      }
    }
    dispatch(addMtyTodo(mtyCateg));
    // dispatch(createTodoThunk(categ));


    // if(categId===0){
    //   formFields[0].push({ todo: '', memo: ''})
    //   // formFields[categId] = [{ todo: '', memo: ''}]
    // }
    // else if(categId>=1 && !formFields[categId]?.length >= 1){
    //   formFields[categId] = [{ todo: '', memo: ''}]
    // }
    // else if(categId>=1 && formFields[categId].length >= 1) {
    //      formFields[categId].push([{ todo: '', memo: ''}])
    // }

    // setFormFields([...formFields])
  }

  // const onSubmitField = (index) => {
  //   let data = [...formFields];
  //   // console.log(data[index])
  // }

  return(
    <>
      <Header/>
      <div>
        <DatePicker 
          endDate={100}
          // getSelectedDay={selectedDay}
          >
        </DatePicker>
      </div>
      <Section>
        <TodoDailyStats></TodoDailyStats>
       {categories.map((input, index) => {
          return( 
           <TodoCon key={index}>
            {/* {console.log("Checking input", input,"Checking index", index)} */}
          <TodoBtn 
            onClick={()=>addTodo({input,index})}
            btnColor={input.categoryColor}
            >
            {input.categoryName}
          </TodoBtn>
          <TodoList 
            // formFields={formFields} 
            // setFormFields={setFormFields}
            // selectedDate={selectedDate}
            categId={input.categoryId}
            todos={input.todos}
            categIndex={index}
          >
          </TodoList>
          {console.log("Checking Categ", input)}
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

const TodoBtn = styled.button`
  background-color: ${props => props.btnColor};
  font-size: 0.9em;
  color: white;
`




