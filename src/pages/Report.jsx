// React
import React, { useEffect, useContext } from "react";
// Styled-Component
import styled from "styled-components";
// Components
import MonthMover from "../components/dateMover/MonthMover";
import MainHeader from "../components/MainHeader";
import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi";
// Imgs
import { report_icon } from "../static/images";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { getReportThunk } from "../redux/modules/reportSlice.js";
// Context API
import { AppContext } from "../context";

const Report = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Context API : To get the selected date && the prasedFullDate from the calendar
  const { parsedMonthApiDate } = useContext(AppContext);

  // Redux useSelector : planet useSelector
  const report = useSelector((state) => state.reportSlice.report);

  const currentMonth = parseInt(parsedMonthApiDate.split("-")[1]);

  // Var : Gettting Category Rank from Redux
  const categoryRank = report?.categoryRank?.map((item) => {
    return item;
  });

  // Var : Gettting the most productive day info from Redux
  const achievementCountTop = report?.achievementCountTop;

  // Var : Gettting the most productive day date from Redux
  const achvCountTopDate = achievementCountTop?.data?.map((item) => {
    return `${item.slice(5, 7)}월 ${item.slice(8, 10)}일`;
  });

  // Var : Getting the longest hours of concentrated day from Redux
  const concentrationTimeTop = report?.concentrationTimeTop;

  // Var : Gettting the longest hours of concentrated day date from Redux
  const concTimeTopDate = concentrationTimeTop?.data?.map((item) => {
    return `${item.slice(5, 7)}월 ${item.slice(8, 10)}일`;
  });

  // Var : Getting the longest hours of concentrated time in hours
  const parsedSumElapsedTime = concentrationTimeTop?.sumElapsedTime;

  // Var : Getting the most concentrated time in foramt 00:00 - 00:00
  const parsedMostConcentrationTime = `${report?.mostConcentrationTime?.startTime}:00 - ${report?.mostConcentrationTime?.endTime}:00`;
  const parsedmostConcTime = report?.mostConcentrationTime?.totalTime;

  useEffect(() => {
    dispatch(getReportThunk(parsedMonthApiDate));
  }, [parsedMonthApiDate, dispatch]);

  return (
    <StyReportCont>
      <MainHeader color={""} />
      <StyDateMoverWrap>
        <MonthMover />
      </StyDateMoverWrap>
      <StyReportWrap>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            {`${localStorage.getItem("nickname")} 님이`}
            <br />
            가장 많이 달성한 카테고리
          </h4>
          <StyReportContent>
            {categoryRank?.length === 0 ? (
              <span>해당 데이터가 없습니다.</span>
            ) : (
              categoryRank?.map((input, index) => {
                return <p key={index}>{input}</p>;
              })
            )}
            {/* <span>한 달동안 40개의 할 일을 완료 했어요.</span> */}
            {/* <span>해당 데이터가 없습니다.</span> */}
          </StyReportContent>
        </div>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            할 일을 가장
            <br />
            많이 완료한 날
          </h4>
          <StyReportContent>
            {achvCountTopDate?.map((input, index) => {
              return <p key={index}>{input}</p>;
            })}
            <span>
              {achievementCountTop?.maxAchievementCount === 0 ? (
                <span>해당 데이터가 없습니다.</span>
              ) : (
                `${achievementCountTop?.maxAchievementCount}개의 할 일을 완료했어요.`
              )}
            </span>
          </StyReportContent>
        </div>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            할 일을 모두 완료한
            <br />
            연속 날짜
          </h4>
          <StyReportContent>
            {report?.achievementCombo === 0 ? (
              <span>해당 데이터가 없습니다.</span>
            ) : (
              <>
                <p>{report?.achievementCombo}일</p>
                <span>
                  연속으로는 {report?.achievementCombo}일 연속 모두 완료했어요.
                </span>
              </>
            )}
          </StyReportContent>
        </div>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            {currentMonth}
            월 중
            <br />
            가장 오래 집중한 날
          </h4>
          <StyReportContent>
            {concTimeTopDate?.map((input, index) => {
              return <p key={index}>{input}</p>;
            })}
            <span>
              총{" "}
              {parsedSumElapsedTime === 0 ? (
                <span>해당 데이터가 없습니다.</span>
              ) : (
                `${parsedSumElapsedTime} 분 동안 집중했어요.`
              )}
            </span>
          </StyReportContent>
        </div>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            {currentMonth}
            월 중 가장
            <br />
            집중이 잘 됐던 시간
          </h4>
          <StyReportContent>
            {parsedmostConcTime === 0 ? (
              <span>해당 데이터가 없습니다.</span>
            ) : (
              <>
                {" "}
                <p>{parsedMostConcentrationTime}</p>
                <span>이 시간에 {parsedmostConcTime}분 동안 집중했어요.</span>
              </>
            )}
          </StyReportContent>
        </div>
      </StyReportWrap>
      <RepStatsBtmFitNavi name={"report"}></RepStatsBtmFitNavi>
    </StyReportCont>
  );
};

export default Report;

const StyReportCont = styled.div`
  padding-bottom: 150px;
`;

const StyDateMoverWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const StyReportWrap = styled.div`
  padding: 0 16px;

  div:not(:first-child) {
    margin-top: 60px;
  }

  h4 {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #b1bdcf;
    margin-bottom: 52px;

    img {
      margin-right: 10px;
    }
  }
`;

const StyReportContent = styled.div`
  text-align: center;

  p {
    line-height: 1;
    font-weight: 600;
    font-size: 24px;
    color: #fff;
    margin-bottom: 10px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    color: #b1bdcf;
    padding-top: 6px;
  }
`;
