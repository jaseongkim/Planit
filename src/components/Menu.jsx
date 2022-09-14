import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">
          <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
          할일 
        </a>
        <a href="/categ">
          <span role="img" aria-label="price">&#x1f4b8;</span>
          목표
          </a>
        <a href="/">
          <span role="img" aria-label="contact">&#x1f4e9;</span>
          통계
          </a>
      </StyledMenu>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  }
  export default Menu;


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 5.5rem;
  position: absolute;
  top: 0;
  z-index: 1000;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(102%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    /* padding: 2rem 0; */
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;