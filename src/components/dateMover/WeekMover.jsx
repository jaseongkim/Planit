import React from 'react';

// Styled-Component
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const WeekMover = ({month,weekOfMonth }) => {

    // console.log("Month", month, "Week Of Month", weekOfMonth)
    const d = new Date()

    return(
        <StyDayCon>
        <AiOutlineLeft className="arrow"/>
        <div>{`${month}월 ${weekOfMonth}째주`}</div>
        <AiOutlineRight className="arrow"/>
        </StyDayCon>
    );
};

export default WeekMover;

const StyDayCon = styled.div`
    width: 200px;
    display: flex;
    color: white;
    align-items: center;
    
    .arrow:first-child{
        margin-right: 5px;
    }

    .arrow:last-child{
        margin-left: 5px;
    }
`


