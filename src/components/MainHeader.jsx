import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logo, searchIcon } from "../static/images";
import { VscBell } from "react-icons/vsc";

export default function MainHeader() {
  const navigate = useNavigate();

  return (
    <MainHeaderWrap>
      <HeaderIconDiv>
        <HeaderIconImg src={logo} />
      </HeaderIconDiv>
      <NavDiv>
        <div>
          <img
            src={searchIcon}
            alt="searchImg"
            onClick={() => navigate("/search")}
          />
        </div>
        <div>
          <VscBell onClick={() => {}} />
        </div>
      </NavDiv>
    </MainHeaderWrap>
  );
}

const MainHeaderWrap = styled.nav`
  max-width: 375px;
  width: 100%;
  height: 54px;
  /* position: fixed; */
  /* top: 0; */
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const HeaderIconDiv = styled.div`
  width: 186px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0 0 0 12px;
`;

const HeaderIconImg = styled.img`
  width: 47px;
  cursor: pointer;
`;

const NavDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 15px 0 0;
  div {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
