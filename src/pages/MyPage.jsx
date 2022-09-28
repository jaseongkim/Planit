import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import MyPageList from "../components/mypage/MyPageList";
import Profile from "../components/mypage/Profile";

export default function MyPage() {
  return (
    <SubContainer>
      <MainHeader text={"마이페이지"} />
      <Profile />
      <MyPageList />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-bottom: 70px;
  overflow-y: auto;
  background: #17171b;
`;
