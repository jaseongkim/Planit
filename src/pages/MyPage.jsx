import React from "react";
import styled from "styled-components";
import MainHeader from "../components/MainHeader";
import MyPageList from "../components/mypage/MyPageList";
import Profil from "../components/mypage/Profil";

export default function MyPage() {
  return (
    <SubContainer>
      <MainHeader text={"마이페이지"} />
      <Profil />
      <MyPageList />
    </SubContainer>
  );
}

const SubContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 100px 0 40px;
  overflow-y: auto;
  background: #17171b;
`;
