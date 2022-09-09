import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import SearchMember from "./SearchMember";

export default function SearchBox() {
  const inputRef = useRef();

  return (
    <Container>
      <HeaderWrap>
        <Wrapper>
          <SearchBarinput type="text" placeholder="Search box" ref={inputRef} />
        </Wrapper>
        <NavDiv>
          <Button>검색</Button>
        </NavDiv>
      </HeaderWrap>

      <SearchMember />
    </Container>
  );
}

const Container = styled.div`
  background: #fff;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
`;

const HeaderWrap = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e4e4e4;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBarinput = styled.input`
  display: flex;
  align-items: center;
  width: 290px;
  margin: 0 0 0 12px;
  font-size: 14px;
  background: #f6f6f6;
  height: 30px;
  border-radius: 6px;
  border: 0;
  color: #2d2d2d;
  padding-left: 10px;
  &:focus {
  }
`;

const NavDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 15px 0 0;
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  border-radius: 2px;
  background: #f6f6f6;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
`;
