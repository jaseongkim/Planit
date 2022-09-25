// React
import React, { useState, useEffect, useRef } from "react";
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
import { getWeekPlanetsThunk } from "../redux/modules/planetSlice";
// Element
import Circle from "../element/Circle.jsx";

const WklyTodo = () => {
  // Redux : dispatch
  const dispatch = useDispatch();

  // Redux : useSelector
  const wkPlanets = useSelector((state) => state.planetSlice.planets);

  // Getting a week of month from a given monday date
  const getWeekNumber = (date) => {
    const dateFrom = new Date(date);
    const currentDate = dateFrom.getDate();
    const startOfMonth = new Date(dateFrom.setDate(1));
    const weekDay = startOfMonth.getDay();

    return parseInt((weekDay - 1 + currentDate) / 7) + 1;
  };

  // Getting Monday of the current week with a given date
  const getMondayOfCurrentWeek = () => {
    const today = new Date();
    const first = today.getDate() - today.getDay() + (today.getDay()===0?-6:1);

    // console.log("check getDate", today.getDate(), "Check getDay", today.getDay())
    // console.log("Check first", first)

    const monday = new Date(today.setDate(first));
    // const parsedDate = `${monday.getFullYear()}-${monday.getMonth()+1}-${monday.getDate()}`
    return monday;
  };

  const parsedDate = `${getMondayOfCurrentWeek().getFullYear()}-${
    String(getMondayOfCurrentWeek().getMonth() + 1).padStart(2, '0')
  }-${String(getMondayOfCurrentWeek().getDate()).padStart(2, '0')}`;
  const month = getMondayOfCurrentWeek().getMonth() + 1;
  const weekOfMonth = getWeekNumber(getMondayOfCurrentWeek());
//   console.log("Checking not parsed monday date :", getMondayOfCurrentWeek());
//   console.log("Checking monday date :", parsedDate);
//   console.log("getting Week Number :", weekOfMonth);
//   console.log("month :", month);

  useEffect(() => {
    dispatch(getWeekPlanetsThunk(parsedDate));
  }, []);

  return (
    <StyTodoCon>
      <Header></Header>
      <StyHeader>
        <WeekMover month={month} weekOfMonth={weekOfMonth} />
        <TodoStatus>
          <div>
            <img src={achieved_icon} alt="achieved icon" />
            <span>{wkPlanets.weeklyTotalAchievement}</span>
          </div>
          <div>
            <img src={like_icon_on} alt="like icon on" />
            <span>{wkPlanets.weeklyTotalLikes}</span>
          </div>
        </TodoStatus>
      </StyHeader>

      <StyCircleCon>
        {wkPlanets.planets?.map((planet, index) => {
          return (
            <StyCircleWrap key={index}>
                {planet.planetType === null || planet.planetType === 0 ? 
                 <Circle planetType={planet.planetType} planetLevel={planet.planetLevel}>{planet.dueDate.substring(8, 10)}</Circle>
                :<>{planet.dueDate.substring(8, 10)}<Circle planetType={planet.planetType} planetLevel={planet.planetLevel}></Circle></>}
            </StyCircleWrap>
            // <StyWklyCircle className={`circle${index}`}></StyWklyCircle>
          );
        })}
      </StyCircleCon>
      <BtmFitNavi name="WklyTodo" wkPlanets={wkPlanets}></BtmFitNavi>
    </StyTodoCon>
  );
};

export default WklyTodo;

const StyTodoCon = styled.div`
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
`;
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
  text-align: center;
  color: white;
  font-weight: ${(props) => props.theme.fontWeight.Bold};

  &:nth-child(1) {
    top: 10px;
    left: 30px;
    /* background-color: red; */
    /* transform: translate(150px,200px); */
  }
  &:nth-child(2) {
    top: 50px;
    left: 220px;
    /* background-color: black; */
    /* transform: translate(450px,500px); */
  }

  &:nth-child(3) {
    top: 180px;
    left: 110px;
    /* background-color: pink; */
    /* transform: translate(450px,500px); */
  }
  &:nth-child(4) {
    top: 320px;
    left: 8px;
    /* background-color: grey; */
    /* transform: translate(450px,500px); */
  }
  &:nth-child(5) {
    top: 420px;
    left: 230px;
    /* background-color: purple; */
    /* transform: translate(450px,500px); */
  }
  &:nth-child(6) {
    top: 530px;
    left: 110px;
    /* background-color: #cd853f; */
    /* transform: translate(450px,500px); */
  }
  &:nth-child(7) {
    top: 650px;
    left: 5px;
    /* background-color: maroon; */
    /* transform: translate(450px,500px); */
  }
`;
const StyCircle = styled.div``;
