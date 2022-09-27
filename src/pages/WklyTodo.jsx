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
    // This source code is from https://falsy.me/javascript-입력한-날짜의-해당-달-기준-주차-구하기/
    function weekNumberByMonth(dateFormat) {

        const inputDate = new Date(dateFormat);

        let year = inputDate.getFullYear();
        let month = inputDate.getMonth() + 1;

        const weekNumberByThurFnc = (paramDate) => {

            const year = paramDate.getFullYear();
            const month = paramDate.getMonth();
            const date = paramDate.getDate();

            const firstDate = new Date(year, month, 1);
            const lastDate = new Date(year, month + 1, 0);
            const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
            const lastDayOfweek = lastDate.getDay();

            const lastDay = lastDate.getDate();

            const firstWeekCheck = firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;

            const lastWeekCheck = lastDayOfweek === 1 || lastDayOfweek === 2 || lastDayOfweek === 3;

            const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);

            let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7);

            if (weekNo === 1 && firstWeekCheck) weekNo = 'prev';

            else if (weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next';

            else if (firstWeekCheck) weekNo = weekNo - 1;

            return weekNo;
  };

        let weekNo = weekNumberByThurFnc(inputDate);

        if (weekNo === 'prev') {
            const afterDate = new Date(year, month - 1, 0);
            year = month === 1 ? year - 1 : year;
            month = month === 1 ? 12 : month - 1;
            weekNo = weekNumberByThurFnc(afterDate);
        }
        if (weekNo === 'next') {
            year = month === 12 ? year + 1 : year;
            month = month === 12 ? 1 : month + 1;
            weekNo = 1;
        }

        return { year, month, weekNo };
    }

  // Getting Monday of the week with a given date
  const getMondayOfWeek = (date) => {
        const first = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
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
    const parsedDispDate = `${weekNumberByMonth(dateValue).month}월 
  ${weekNumberByMonth(getMondayOfWeek(dateValue)).weekNo}째주`;

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
          {/* <div>
            <img src={like_icon_on} alt="like icon on" />
            <span>{wkPlanets.weeklyTotalLikes}</span>
          </div> */}
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

const StyTodoCon = styled.div``;

const StyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const TodoStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;

  span {
    font-weight: 400;
    color: #fff;
    margin-left: 5px;
  }
`;

const StyCircleCon = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 375px;
  height: 100vh;
  overflow: auto;
  /* border: 3px solid red; */
`;

const StyCircleWrap = styled.div`
  position: absolute;
  text-align: center;
  color: white;
  font-weight: ${(props) => props.theme.fontWeight.Bold};
  transform: translate(-50%, -50%);

  &:nth-child(1) {
    /* top: 182px; */
    left: 69px;
    top: 22.4138vh;
    /* left: 18.4vw; */
  }
  &:nth-child(2) {
    /* top: 219px; */
    left: 302px;
    top: 26.9704vh;
    /* left: 80.5333vw; */
  }

  &:nth-child(3) {
    /* top: 311px; */
    left: 189px;
    top: 38.3005vh;
    /* left: 50.4vw; */
  }
  &:nth-child(4) {
    /* top: 435px; */
    left: 71px;
    top: 53.5714vh;
    /* left: 18.9333vw; */
  }
  &:nth-child(5) {
    /* top: 458px; */
    left: 302px;
    top: 56.4039vh;
    /* left: 80.5333vw; */
  }
  &:nth-child(6) {
    /* top: 553px; */
    left: 189px;
    top: 68.1034vh;
    /* left: 50.4vw; */
  }
  &:nth-child(7) {
    /* top: 612px; */
    left: 71px;
    top: 75.3695vh;
    /* left: 18.9333vw; */
  }
`;
