// React
import React from 'react';
// Styled-Component
import styled from "styled-components";
// React Icon
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DayMover = () => {

    const d = new Date()

    console.log("Check dayMover",d)

    return(
        <StyDayCon>
            <button>
                <AiOutlineLeft className="arrow"/>
            </button>
            <div>10월 17일</div>
            <button>
                <AiOutlineRight className="arrow"/>
            </button>
        </StyDayCon>
    );
};

export default DayMover;

const StyDayCon = styled.div`
    display: flex;
    align-items: center;
    
    div {
        font-size: 18px;
        color: #fff;
        margin: 0 10px;
    }

    button {
        width: 24px;
        height:24px;
        color: #fff;
        background: transparent;
        border: none;
    }
`


