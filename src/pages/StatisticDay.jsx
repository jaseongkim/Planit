import React, { useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getChartDataDay } from "../redux/modules/statisticSlice";
import ProgressBar from "react-bootstrap/ProgressBar";
ChartJS.register(...registerables);

const Statistic = () => {
  const dispatch = useDispatch();
  const date = "2022-10-03";

  const statistic = useSelector((state) => state.statisticSlice.statistic);

  const labels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];

  const CO = statistic?.concentrationRates?.map((item) => {
    return item.concentrationRate;
  });

  const AO = statistic?.achievementRate;
  const TO = statistic?.achievementCnt;

  useEffect(() => {
    dispatch(getChartDataDay(date));
  }, [JSON.stringify(statistic)]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "data 1",
        data: CO,
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
      <ProgressBar now={AO} label={`${AO}% (${TO}개)`} />
      <Bar type="bar" data={data} />
    </div>
  );
};

export default Statistic;
