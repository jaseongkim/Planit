import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { profile_default, next_icon } from '../../static/images';

const Menu = ({ open, setOpen }) => {
  return (
    <StyMenuCont open={open}>
      <StyBackgroud onClick={() => setOpen(false)}></StyBackgroud>
      <StyledMenu open={open}>
        <MyInfoInMenu>
          <div>
            <img src={profile_default} alt="프로필 이미지" />
          </div>
          <MyInfoWrap>
            <a href="/mypage">
              닉네임
              <img src={next_icon} alt="화살표 아이콘" />
            </a>
            {/* <FollowBox>
              <button>팔로워<span>12</span></button>
              <button>팔로잉<span>12</span></button>
            </FollowBox> */}
          </MyInfoWrap>
        </MyInfoInMenu>
        <StyledMenuList>
          <a href="/category">
            카테고리
            <img src={next_icon} alt="화살표 아이콘" />
          </a>
          {/* <a href="/">
            통계
            <img src={next_icon} alt="화살표 아이콘" />
          </a> */}
        </StyledMenuList>
      </StyledMenu>
    </StyMenuCont>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;

const StyMenuCont = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: ${({ open }) => open ? 
    'visibility 0s ease-in-out, opacity .3s ease-in-out' : 
    'visibility 0s ease-in-out .2s, opacity .3s ease-in-out .2s'};
`;

const StyBackgroud = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #17171bcc;
`;

const StyledMenu = styled.nav`
  width: 300px;
  height: 100vh;
  padding: 60px 20px;
  background: #2d3034;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 1000;
`;

const MyInfoInMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const MyInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1;
    font-size: 20px;
    color: #fff;
  }
`;

const FollowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  button {
    color: #fff;
    font-size: 16px;
    padding: 0;
    background: transparent;
    border: none;

    span {
      line-height: 1;
      margin-left: 8px;
    }
  }
`;

const StyledMenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 18px;
    padding: 16px 0;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    border-bottom: 1px solid #5d646b;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;