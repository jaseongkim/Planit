import React from 'react';

// Styled-Component
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DayMover = () => {

    const d = new Date()

    console.log("Check dayMover",d)

    return(
        <StyDayCon>
        <AiOutlineLeft className="arrow"/>
        <div>10월 17일</div>
        <AiOutlineRight className="arrow"/>
        </StyDayCon>
    );
};

export default DayMover;

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


