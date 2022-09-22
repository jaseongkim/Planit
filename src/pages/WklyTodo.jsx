// React
import React, { useState, useEffect, useRef} from "react";

// Styled-Component
import styled from "styled-components";

// React Component
import Header from "../components/Header";
import BtmFitNavi from "../components/btmFitNaviBar/BtmFitNavi.jsx";
import WeekMover from "../components/dateMover/WeekMover.jsx";
// React-icons
import { achieved_icon, like_icon_on } from "../static/images";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  getWeekPlanetsThunk
} from "../redux/modules/planetSlice";

// Element
import Circle from "../element/Circle.jsx";

const WklyTodo = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const wkPlanets = useSelector((state) => state.planetSlice.planets);

    useEffect(() => {   
        console.log("Check useEffect here")   
        dispatch(getWeekPlanetsThunk());
      }, []);

    const getWeekNumber = (dateFrom = new Date()) => {
        const currentDate = dateFrom.getDate();
        const startOfMonth = new Date(dateFrom.setDate(1));
        const weekDay = startOfMonth.getDay(); 
    
        return parseInt(((weekDay - 1) + currentDate) / 7) + 1;
      }

      console.log((getWeekNumber(new Date())));

    return (
        <StyWklyTodoCon>
            <Header></Header>
            <StyHeader>
              <WeekMover />
              <TodoStatus>
                <div>
                  <img src={achieved_icon} alt="achieved icon" />
                  <span>0</span>
                </div>
                <div>
                  <img src={like_icon_on} alt="like icon on" />
                  <span>0</span>
                </div>
              </TodoStatus>
            </StyHeader>

            <StyCircleCon>
            {wkPlanets.planets?.map((planet, index) => {
                console.log("Checking", index)
              return(
             <StyCircleWrap>
              <Circle key={planet.todoListId}></Circle>
              </StyCircleWrap>
                // <StyWklyCircle className={`circle${index}`}></StyWklyCircle>
              )
            })}
            </StyCircleCon>
            <BtmFitNavi name='WklyTodo'></BtmFitNavi>
        </StyWklyTodoCon>
    );
};

export default WklyTodo;

const StyWklyTodoCon = styled.div`
  padding: 15px;
`;

const TodoStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  /* margin-bottom: 20px; */
  /* padding: 0 20px; */
  gap: 12px;

  span {
    font-weight: 400;
    color: #fff;
    margin-left: 5px;
  }
`;

const StyHeader = styled.div`
  display: flex;
  margin: 3% 0;
`;

const StyCircleCon = styled.div`
  border: 3px solid red;
  height: 85vh;
  position: relative;
`
// const StyWklyCircle = styled.div`
//   margin: 0 auto;
//   display: flex;
//   width: 100px;
//   height: 100px;
//   background: green;
//   border-radius: 50%;
//   align-items: center;
//   justify-content: center;

//   /* .circle0 {
//     top: 150px;
//     left: 200px;
//     background-color: red;
//   } */
// `

const StyCircleWrap = styled.div`
  position: absolute;

  &:nth-child(1){
    top: 10px;
    left: 30px;
    background-color: red;
    /* transform: translate(150px,200px); */
  }
  &:nth-child(2){
    top: 50px;
    left: 220px;
    background-color: black;
    /* transform: translate(450px,500px); */
    }

  &:nth-child(3){
    top: 180px;
    left: 110px;
    background-color: pink;
  /* transform: translate(450px,500px); */
  }
  &:nth-child(4){
    top: 320px;
    left: 8px;
    background-color: grey;
  /* transform: translate(450px,500px); */
  }
  &:nth-child(5){
    top: 420px;
    left: 230px;
    background-color: purple;
  /* transform: translate(450px,500px); */
  }
  &:nth-child(6){
    top: 530px;
    left: 110px;
    background-color: white;
  /* transform: translate(450px,500px); */
  }
  &:nth-child(7){
    top: 650px;
    left: 5px;
    background-color: maroon;
  /* transform: translate(450px,500px); */
  }
`


