// React
import React, { useEffect,useContext } from "react";
// Chart JS
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChartDataWeek } from "../redux/modules/statisticSlice";
// Styled-Component
import styled from "styled-components";
// Component
import WeekMover from "../components/dateMover/WeekMover";
import StatsBtmNavi from "../components/StatsBtmNavi";
// Context API
import { AppContext } from "../context"

import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi"

ChartJS.register(...registerables);

const Statistic = () => {

  // dispatch
  const dispatch = useDispatch();

  // Context API : To get the selected date from the calendar
  const { dateValue, setDateValue, getMondayOfWeek } = useContext(AppContext);

   // Var ; A parsed Monday of Week in format yyyy/mm/dd for API
   const parsedMondayOfWeekDate = `${getMondayOfWeek(dateValue).getFullYear()}-${String(
    getMondayOfWeek(dateValue).getMonth() + 1
  ).padStart(2, "0")}-${String(getMondayOfWeek(dateValue).getDate()).padStart(
    2,
    "0"
  )}`;
  
  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = ["월", "화", "수", "목", "금", "토", "일"];

  const achievementRate = statistic?.achievementRates?.map((item) => {
    return item.achievementRate;
  });
  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  useEffect(() => {
    dispatch(getChartDataWeek(parsedMondayOfWeekDate));
  }, [parsedMondayOfWeekDate,dispatch]);

  const achievementRateWeekData = {
    labels: labels,
    datasets: [
      {
        label: "주간 달성률",
        data: achievementRate,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const concentrationWeekData = {
    labels: labels,
    datasets: [
      {
        label: "주간 집중도",
        data: concentration,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <WeekMover></WeekMover>
      <Bar type="bar" data={achievementRateWeekData} />
      <Bar type="bar" data={concentrationWeekData} />
      <StatsBtmNavi></StatsBtmNavi>
      <RepStatsBtmFitNavi name="statisticweek"></RepStatsBtmFitNavi>
    </div>
  );
};

export default Statistic;
