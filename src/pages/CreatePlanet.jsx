// React
import React, { useState } from "react";
// Styled Component
import styled from "styled-components";
// React Icon
import { AiOutlineLeft } from "react-icons/ai";
// Planets Imgs
import { A3, B3, C3, D3, E3 } from "../static/images";
// Elments
import Button from "../element/Button";
// Redux
import { useDispatch } from "react-redux";
import { createPlanetThunk } from "../redux/modules/planetSlice";

const CreatePlanet = () => {

  // Redux : dispatch
  const dispatch = useDispatch();

  var planetType = ""

  const onClickHandler = () => {
    dispatch(createPlanetThunk(planetType))
  }

  return (
    <StyContainer>
      <StyHeader>
        <AiOutlineLeft className="arrow" />
        <h1>오늘의 행성</h1>
      </StyHeader>
      <StyContent>오늘 키워갈 행성을 골라주세요.</StyContent>
      <StyPlanets>
        <button onClick={()=>{planetType=1}}>
          <img src={A3} alt="A3" />
        </button>
        <button onClick={()=>{planetType=2}}>
          <img src={B3} alt="B3" />
        </button>
        <button onClick={()=>{planetType=3}}>
          <img src={C3} alt="C3" />
        </button>
        <button onClick={()=>{planetType=4}}>
          <img src={D3} alt="D3" />
        </button>
        <button onClick={()=>{planetType=5}}>
          <img src={E3} alt="E3" />
        </button>
      </StyPlanets>
      <Button
        _onClick={()=> {onClickHandler()}}
        height="2em"
        border="none"
        color="#FFFFFF"
        backgroundColor="#3185F3"
      >
        확인
      </Button>
    </StyContainer>
  );
};

export default CreatePlanet;

const StyContainer = styled.div`
  padding: 15px;
  top: 0;
  color: #fff;
`;

const StyHeader = styled.div`
  position: sticky;
  display: flex;
  align-items: center;

  .arrow {
    margin-right: ${(props) => props.theme.margins.small};
  }

  h1 {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-size: ${(props) => props.theme.fontSizes.xlll};
    margin-bottom: 0;
  }
`;
const StyContent = styled.div`
  text-align: center;
  color: #b1bdcf;
  font-size: 0.93em;
  margin: 2.6em 0;
`;
const StyPlanets = styled.div`
  text-align: center;
  button {
    background: transparent;
    border: none;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
