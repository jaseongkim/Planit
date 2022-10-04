// React
import React, { useEffect, useContext } from "react";
// Chart
import ProgressBar from "react-bootstrap/ProgressBar";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getChartDataDay } from "../redux/modules/statisticSlice";
// Styled-components
import styled from "styled-components";
// Context API
import { AppContext } from "../context";
// Components
import DayMover from "../components/dateMover/DayMover";
import MainHeader from "../components/MainHeader";
import StatsBtmNavi from "../components/StatsBtmNavi";
import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi";

ChartJS.register(...registerables);

const Statistic = () => {
  const dispatch = useDispatch();

  // Context API : To get the selected date from the calendar
  const { parsedFullDate } = useContext(AppContext);

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    "시",
  ];

  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  const achievementRate = statistic?.achievementRate;
  const achievementTotalTodoCnt = statistic?.achievementTotalTodoCnt;
  const achievementCnt = statistic?.achievementCnt;

  useEffect(() => {
    dispatch(getChartDataDay(parsedFullDate));
  }, [parsedFullDate, dispatch]);

  const concentrationDayData = {
    labels: labels,
    datasets: [
      {
        label: "시간대별 집중도",
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
          <DayMover />
        </StyDateMoverWrap>
        <StyChartBox>
          <h3>할 일 달성률</h3>
          <StyChartInner>
            <div>
              <p>{achievementRate}%</p>
              <ProgressBar
                now={achievementRate}
                label={achievementRate > 0 ? `${achievementCnt}개` : ""}
              />
              <div>
                <span>0</span>
                <span>{achievementTotalTodoCnt}(개)</span>
              </div>
            </div>
          </StyChartInner>
        </StyChartBox>
        <StyChartBox>
          <h3>집중도</h3>
          <StyChartInner>
            <Bar type="bar" data={concentrationDayData} options={options} />
          </StyChartInner>
        </StyChartBox>
        <StatsBtmNavi name={"statisticday"} />
      </StyChartWrap>
      <RepStatsBtmFitNavi/>
    </StyChartCont>
  );
};

export default Statistic;

const StyChartCont = styled.div`
  padding-bottom: 150px;
`;

const StyDateMoverWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
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
