import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/dlytodo">할일</a>
      <a href="/category">카테고리</a>
      <a href="/">통계</a>
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
  position: absolute;
  top: 0;
  right: 0;
  width: 335px;
  height: 100vh;
  padding: 80px 30px;
  background: #17171b;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 1000;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 18px;
    padding: 8px 0;
    font-weight: bold;
    // color: ${({ theme }) => theme.primaryDark};
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      // color: ${({ theme }) => theme.primaryHover};
      color: #3185f3;
    }
  }
`;