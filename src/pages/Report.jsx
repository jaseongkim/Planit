import React from "react";
import styled from "styled-components";
import DayMover from "../components/dateMover/DayMover";
import MainHeader from "../components/MainHeader";
import RepStatsBtmFitNavi from "../components/btmFitNaviBar/RepStatsBtmFitNavi";
import { report_icon } from "../static/images";

const Report = () => {
  return (
    <StyReportCont>
      <MainHeader id="header" text={"닉네임님의 리포트"} color={""} />
      <StyDateMoverWrap>
        <DayMover />
      </StyDateMoverWrap>
      <StyReportWrap>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            닉네임님이
            <br />
            가장 많이 달성한 카테고리
          </h4>
          <StyReportContent>
            <p>카테고리명</p>
            <span>한 달동안 40개의 할 일을 완료 했어요.</span>
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
            <p>10월 12일</p>
            <p>10월 14일</p>
            <span>20개의 할 일을 완료했어요.</span>
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
            <p>4일</p>
            <span>연속으로는 4일 연속 모두 완료했어요.</span>
          </StyReportContent>
        </div>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            9월 중
            <br />
            가장 오래 집중한 날
          </h4>
          <StyReportContent>
            <p>10월 12일</p>
            <span>총 5시간동안 집중했어요.</span>
          </StyReportContent>
        </div>
        <div>
          <h4>
            <img src={report_icon} alt="리포트 타이틀 아이콘" />
            9월 중 가장
            <br />
            집중이 잘 됐던 시간
          </h4>
          <StyReportContent>
            <p>16:00 ~ 17:00</p>
            <p>21:00 ~ 22:00</p>
            <span>이 시간에 1시간 동안 집중했어요.</span>
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
