import React, { useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getChartDataDay } from "../redux/modules/statisticSlice";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";
ChartJS.register(...registerables);

const Statistic = () => {
  const dispatch = useDispatch();
  const date = "2022-10-03";

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  const concentration = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  const achievementRate = statistic?.achievementRate;
  const achievementCnt = statistic?.achievementCnt;

  useEffect(() => {
    dispatch(getChartDataDay(date));
  }, [JSON.stringify(statistic)]);

  const concentrationDayData = {
    labels: labels,
    datasets: [
      {
        label: "시간대별 집중도",
        data: concentration,
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
        },
        beginAtZero: false,
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
          display: false,
        },
        beginAtZero: true,
        ticks: {
          color: "#fff",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <StyChartCont>
      <ProgressBar
        now={achievementRate}
        label={`${achievementRate}% (${achievementCnt}개)`}
      />
      <Bar type="bar" data={concentrationDayData} options={options} />
    </StyChartCont>
  );
};

export default Statistic;

const StyChartCont = styled.div`
  margin-top: 100px;
  padding: 0 16px;
  .progress {
    margin-bottom: 50px;
  }
`;
