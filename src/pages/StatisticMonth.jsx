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
import MainHeader from "../components/MainHeader";
// Context API
import { AppContext } from "../context"

ChartJS.register(...registerables);

const Statistic = () => {

  const dispatch = useDispatch();

  // Context API : To get the selected date from the calendar
  const {parsedFullApiDate} = useContext(AppContext);

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = ["1주", "2주", "3주", "4주", "5주"];

  const achievementRate = statistic?.achievementRates?.map((item) => {
    return item.achievementRate;
  });
  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  useEffect(() => {
    dispatch(getChartDataMonth(parsedFullApiDate));
  }, [parsedFullApiDate, dispatch]);

  const achievementRateMonthData = {
    labels: labels,
    datasets: [
      {
        label: "월간 달성률",
        data: achievementRate,
        backgroundColor: "#2B7FFF",
        borderColor: "#2B7FFF",
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
          <MonthMover />
        </StyDateMoverWrap>
        <StyChartBox>
          <h3>할 일 달성률</h3>
          <StyChartInner>
            <Bar type="bar" data={achievementRateMonthData} options={options}/>
          </StyChartInner>
        </StyChartBox>
        <StyChartBox>
          <h3>집중도</h3>
          <StyChartInner>
            <Bar type="bar" data={concentrationMonthData} options={options}/>
          </StyChartInner>
        </StyChartBox>
        <StatsBtmNavi name={"statisticmonth"}/>
      </StyChartWrap>
      <RepStatsBtmFitNavi/>
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
