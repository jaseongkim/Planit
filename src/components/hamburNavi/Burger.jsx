import React from "react";
import styled from "styled-components";
import { bool, func } from 'prop-types';
import {burger_icon} from "../../static/images";
import {IoClose} from "react-icons/io5";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      {open ? <IoClose style={{color: "#fff"}} /> : <img src={burger_icon} alt="burger icon" />}
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;

const StyledBurger = styled.button`
  z-index: 1005;
`;
