import React from 'react';

// Styled-Component
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const WeekMover = ({month,weekOfMonth }) => {

    // console.log("Month", month, "Week Of Month", weekOfMonth)
    const d = new Date()

    return(
        <StyWeekCon>
        <button>
        <AiOutlineLeft 
            className="arrow"
            style={{color: "rgba(177, 189, 207, 1)"}}
            onClick={()=>{alert("Hello This is left")}}
        />
        </button>
        <div>{`${month}월 ${weekOfMonth}째주`}</div>
        <button>
        <AiOutlineRight 
            className="arrow"
            style={{color: "rgba(177, 189, 207, 1)"}}
            onClick={()=>{alert("Hello This is right")}}
        />
        </button>
        </StyWeekCon>
    );
};

export default WeekMover;

const StyWeekCon = styled.div`
    width: 200px;
    display: flex;
    color: white;
    align-items: center;

    button{
        background: transparent;
        border: none;
    }
    
    .arrow:first-child{
        margin-right: 5px;
    }

    .arrow:last-child{
        margin-left: 5px;
    }
`


