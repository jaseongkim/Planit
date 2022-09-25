// React
import React from 'react';
// Styled-Component
import styled from "styled-components";
// React Icon
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DayMover = ({parsedParDate,setDateValue,dateValue}) => {

    // Var: Getting a local current time
    const currDate = new Date(dateValue)

    // When clicked, subtrack 1 from the current time
    const onClickLeft = () => {
     currDate.setDate(currDate.getDate()-1)
     setDateValue(currDate)
    }

    // When clicked, add 1 from the current time
    const onClickRight = () => {
     currDate.setDate(currDate.getDate()+1)
     setDateValue(currDate)
    }

    return(
        <StyDayCon>
        <button>
        <AiOutlineLeft 
            className="arrow"
            style={{color: "rgba(177, 189, 207, 1)"}}
            onClick={()=>{onClickLeft()}}
        />
        </button>
        <div>{parsedParDate}</div>
        <button>
        <AiOutlineRight 
            className="arrow"
            style={{color: "rgba(177, 189, 207, 1)"}}
            onClick={()=>{onClickRight()}}
        />
        </button>
        </StyDayCon>
    );
};

export default DayMover;

const StyDayCon = styled.div`
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


