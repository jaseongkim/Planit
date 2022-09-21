// React
import React, { useState, useEffect, useRef} from "react";

// Styled-Component
import styled from "styled-components";

// React Component
import Header from "../components/Header";
import BtmFitNavi from "../components/btmFitNaviBar/BtmFitNavi.jsx";

// Element
import Circle from "../element/Circle.jsx";

const WklyTodo = () => {

    const getWeekNumber = (dateFrom = new Date()) => {
        const currentDate = dateFrom.getDate();
        const startOfMonth = new Date(dateFrom.setDate(1));
        const weekDay = startOfMonth.getDay(); 
    
        return parseInt(((weekDay - 1) + currentDate) / 7) + 1;
      }

      console.log((getWeekNumber(new Date())));


  


    return (
        <StyWklyTodoCon>
            <Header></Header>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <Circle></Circle>
            <BtmFitNavi name='WklyTodo'></BtmFitNavi>
        </StyWklyTodoCon>
    );
};

export default WklyTodo;

const StyWklyTodoCon = styled.div`
  padding: 15px;
`;


