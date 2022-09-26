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

  // Hook : A date that let user to choose different date from the WeekMover
  const [dateValue, setDateValue] = useState(new Date());

  // Redux : weeklyPlants useSelector
  const wkPlanets = useSelector((state) => state.planetSlice.planets);

  // Getting a week of month from a given monday date
  const getWeekNumber = (date) => {
    const dateFrom = new Date(date);
    const currentDate = dateFrom.getDate();
    const startOfMonth = new Date(dateFrom.setDate(1));
    const weekDay = startOfMonth.getDay();

    return parseInt((weekDay - 1 + currentDate) / 7) + 1;
  };

  // Getting Monday of the week with a given date
  const getMondayOfWeek = (date) => {
    const first =
      date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    const monday = new Date(date.setDate(first));

    return monday;
  };

  // Var ; A parsed date in format yyyy/mm/dd for API
  const parsedDate = `${getMondayOfWeek(dateValue).getFullYear()}-${String(
    getMondayOfWeek(dateValue).getMonth() + 1
  ).padStart(2, "0")}-${String(getMondayOfWeek(dateValue).getDate()).padStart(
    2,
    "0"
  )}`;

  // Var ; A parsed date in format yy년 mm월 dd째주 to display on the WeekMover
  const parsedDispDate = `${String(
    getMondayOfWeek(dateValue).getFullYear()
  ).slice(2, 4)}년 ${
    getMondayOfWeek(dateValue).getMonth() + 1
  }월 ${getWeekNumber(getMondayOfWeek(dateValue))}째주`;

  // UseEffect : Getting weekly planets with its week's date
  // when dateValue get updated, re-render WklyTodo after return
  useEffect(() => {
    dispatch(getWeekPlanetsThunk(parsedDate));
  }, [dateValue]);

  return (
    <StyTodoCon>
      <Header></Header>
      <StyHeader>
        <WeekMover
          parsedDispDate={parsedDispDate}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
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
              {planet.planetType === null || planet.planetType === 0 ? (
                <Circle>{planet.dueDate.substring(8, 10)}</Circle>
              ) : (
                <>
                  {planet.dueDate.substring(8, 10)}
                  <Circle
                    planetType={planet.planetType}
                    planetLevel={planet.planetLevel}
                    planetSize={planet.planetSize}
                  ></Circle>
                </>
              )}
            </StyCircleWrap>
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
