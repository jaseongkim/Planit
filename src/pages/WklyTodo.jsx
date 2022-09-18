// React
import React, { useState, useEffect, useRef} from "react";

// Styled-Component
import styled from "styled-components";

// React Component
import Header from "../components/Header";
import BtmFitNavi from "../components/btmFitNaviBar/BtmFitNavi.jsx";

const WklyTodo = () => {
    return (
        <div>
            <Header></Header>
            <BtmFitNavi name='WklyTodo'></BtmFitNavi>
        </div>
    );
};

export default WklyTodo;

