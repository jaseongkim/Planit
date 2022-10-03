import React from "react";
import styled from "styled-components";
import MyPageItem from "./MyPageItem.jsx";

export default function MyPageList() {
  const isKako = localStorage.getItem("isKako");

  return (
    <MyPageContainer>
      <MyPageItem id={1} text={"닉네임 변경"} />
      <div style={{ display: `${isKako === true ? "none" : "block"}` }}>
        <MyPageItem id={2} text={"비밀번호 변경"} />
      </div>
      <MyPageItem id={3} text={"로그아웃"} />
    </MyPageContainer>
  );
}

const MyPageContainer = styled.div`
  margin-top: 30px;
  padding: 0 24px;
`;
