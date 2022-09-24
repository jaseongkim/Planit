// React
import React from 'react';
// Styled-Component
import styled from "styled-components";
// React Icon
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DayMover = ({parsedParDate}) => {

    const d = new Date()

    console.log("Checking", parsedParDate)
    // console.log("Check dayMover",d)

    return(
        <StyDayCon>
        <AiOutlineLeft className="arrow"/>
        <div>{parsedParDate}</div>
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


