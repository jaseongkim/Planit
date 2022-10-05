// React
import React, { useEffect, useContext } from "react";
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
import MainHeader from "../components/MainHeader";
// Context API
import { AppContext } from "../context";

import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi";

ChartJS.register(...registerables);

const Statistic = () => {
  // dispatch
  const dispatch = useDispatch();

  // Context API : To get the selected date from the calendar
  const { dateValue, setDateValue, getMondayOfWeek } = useContext(AppContext);

  // Var ; A parsed Monday of Week in format yyyy/mm/dd for API
  const parsedMondayOfWeekDate = `${getMondayOfWeek(
    dateValue
  ).getFullYear()}-${String(getMondayOfWeek(dateValue).getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(getMondayOfWeek(dateValue).getDate()).padStart(2, "0")}`;

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = ["월", "화", "수", "목", "금", "토", "일", "요일"];

  const achievementRate = statistic?.achievementRates?.map((item) => {
    return item.achievementRate;
  });
  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  useEffect(() => {
    dispatch(getChartDataWeek(parsedMondayOfWeekDate));
  }, [parsedMondayOfWeekDate, dispatch]);

  const achievementRateWeekData = {
    labels: labels,
    datasets: [
      {
        label: "주간 달성률",
        data: achievementRate,
        backgroundColor: "#1671FA",
        borderColor: "#1671FA",
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
        backgroundColor: "#2B7FFF",
        borderColor: "#2B7FFF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "transparent",
          borderColor: "#fff",
        },
        beginAtZero: true,
        ticks: {
          color: "#fff",
          font: {
            size: 12,
          },
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        grid: {
          display: true,
          borderColor: "#fff",
          color: "rgba(233,233,233,0.2)",
          tickBorderDash: [0, 5],
          borderDash: [3, 1],
        },
        beginAtZero: true,
        zeroLineColor: "transparent",
        ticks: {
          color: "#fff",
          font: {
            size: 12,
          },
          // stepSize: 20,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <StyChartCont>
      <MainHeader color={""} />
      <StyChartWrap>
        <StyDateMoverWrap>
          <WeekMover />
        </StyDateMoverWrap>
        <StyChartBox>
          <h3>할 일 달성률</h3>
          <StyChartInner>
            <Bar type="bar" data={achievementRateWeekData} options={options} />
          </StyChartInner>
        </StyChartBox>
        <StyChartBox>
          <h3>집중도</h3>
          <StyChartInner>
            <Bar type="bar" data={concentrationWeekData} options={options} />
          </StyChartInner>
        </StyChartBox>
        <StatsBtmNavi name={"statisticweek"} />
      </StyChartWrap>
      <RepStatsBtmFitNavi />
    </StyChartCont>
  );
};

export default Statistic;

const StyChartCont = styled.div`
  padding-bottom: 150px;
`;

const StyChartWrap = styled.div`
  padding: 0 16px;

  h3 {
    font-weight: 600;
    font-size: 18px;
    color: #fff;
  }

  canvas {
    height: 180px !important;
  }
`;

const StyDateMoverWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const StyChartBox = styled.div`
  &:not(:first-child) {
    margin-top: 30px;
  }
`;

const StyChartInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 180px;

  div {
    width: 100%;
  }

  p {
    text-align: center;
    font-size: 24px;
    color: #e9e9e9;
    margin-bottom: 20px;
  }

  .progress {
    width: 100%;
    background: #b1bdcf;
    border-radius: 44px;

    &-bar {
      position: relative;
      line-height: 1;
      background: #1671fa;
      border-radius: 44px;
      text-align: right;
      padding-right: 5px;
    }

    & + div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-weight: 400;
      font-size: 14px;
      color: #b1bdcf;
      margin-top: 16px;
    }
  }
`;
