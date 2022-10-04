// React
import React, { useEffect, useContext } from "react";
// Chart JS
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChartDataYear } from "../redux/modules/statisticSlice";
// Styled-Component
import styled from "styled-components";
// Component
import StatsBtmNavi from "../components/StatsBtmNavi";
import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi";
import YearMover from "../components/dateMover/YearMover"
// Context API
import { AppContext } from "../context"

ChartJS.register(...registerables);

const Statistic = () => {

  // Dispatch
  const dispatch = useDispatch();
  
  // Context API : To get the selected date from the calendar
  const {parsedFullDate} = useContext(AppContext);

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const achievementRate = statistic?.achievementRates?.map((item) => {
    return item.achievementRate;
  });
  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  useEffect(() => {
    dispatch(getChartDataYear(parsedFullDate ));
  }, [parsedFullDate, dispatch]);

  const achievementRateYearData = {
    labels: labels,
    datasets: [
      {
        label: "연간 달성률",
        data: achievementRate,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const concentrationYearData = {
    labels: labels,
    datasets: [
      {
        label: "연간 집중도",
        data: concentration,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
          "rgba(153, 102, 255)",
          "rgba(201, 203, 207)",
          "rgba(255, 99, 132)",
          "rgba(255, 159, 64)",
          "rgba(255, 205, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <YearMover></YearMover>
      <Bar type="bar" data={achievementRateYearData} />
      <Bar type="bar" data={concentrationYearData} />
      <StatsBtmNavi></StatsBtmNavi>
      <RepStatsBtmFitNavi name="statisticyear"></RepStatsBtmFitNavi>
    </div>
  );
};

export default Statistic;
