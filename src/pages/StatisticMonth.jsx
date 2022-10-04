// React
import React, { useEffect, useContext } from "react";
// Chart JS
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChartDataMonth } from "../redux/modules/statisticSlice";
// Styled-Component
import styled from "styled-components";
// Component
import StatsBtmNavi from "../components/StatsBtmNavi";
import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi";
import MonthMover from "../components/dateMover/MonthMover";
// Context API
import { AppContext } from "../context"

ChartJS.register(...registerables);

const Statistic = () => {

  const dispatch = useDispatch();

  // Context API : To get the selected date from the calendar
  const {parsedFullDate } = useContext(AppContext);

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = ["1주", "2주", "3주", "4주", "5주"];

  const achievementRate = statistic?.achievementRates?.map((item) => {
    return item.achievementRate;
  });
  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  useEffect(() => {
    dispatch(getChartDataMonth(parsedFullDate));
  }, [parsedFullDate, dispatch]);

  const achievementRateMonthData = {
    labels: labels,
    datasets: [
      {
        label: "월간 달성률",
        data: achievementRate,
        backgroundColor: [
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
        ],
        borderWidth: 1,
      },
    ],
  };

  const concentrationMonthData = {
    labels: labels,
    datasets: [
      {
        label: "월간 집중도",
        data: concentration,
        backgroundColor: [
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
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <MonthMover></MonthMover>
      <Bar type="bar" data={achievementRateMonthData} />
      <Bar type="bar" data={concentrationMonthData} />
      <RepStatsBtmFitNavi name="statisticmonth"></RepStatsBtmFitNavi>
      <StatsBtmNavi name="statisticmonth"></StatsBtmNavi>
    </div>
  );
};

export default Statistic;
