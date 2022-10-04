import React from "react";
import { bool } from "prop-types";
import styled from "styled-components";
import { next_icon } from "../../static/images";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../redux/modules/membersSlice";

const Menu = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const memberId = localStorage.getItem("memberId");

  const memberProfile = useSelector((state) => state.membersSlice.profile);

  useEffect(() => {
    if (open === true) {
      dispatch(getProfileThunk(memberId));
    }
  }, [dispatch, memberId, open]);

  return (
    <StyMenuCont open={open}>
      <StyBackgroud onClick={() => setOpen(false)}></StyBackgroud>
      <StyledMenu open={open}>
        <MyInfoCont>
          <StyProfileImg imgUrl={memberProfile?.profileImgUrl}></StyProfileImg>
          <MyInfoWrap>
            <a href="/mypage">
              {memberProfile?.nickname}
              <img src={next_icon} alt="화살표 아이콘" />
            </a>
            {/* <FollowBox>
              <button>팔로워<span>12</span></button>
              <button>팔로잉<span>12</span></button>
            </FollowBox> */}
          </MyInfoWrap>
        </MyInfoCont>
        <StyledMenuList>
          <a href="/category">
            카테고리
            <img src={next_icon} alt="화살표 아이콘" />
          </a>
          <a href="/timer">
            타이머
            <img src={next_icon} alt="화살표 아이콘" />
          </a>
          <a href="/report">
            리포트
            <img src={next_icon} alt="화살표 아이콘" />
          </a>
          <a href="/statisticday">
            통계
            <img src={next_icon} alt="화살표 아이콘" />
          </a>
          {/* <a href="/">
            통계
            <img src={next_icon} alt="화살표 아이콘" />
          </a> */}
        </StyledMenuList>
      </StyledMenu>
    </StyMenuCont>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;

const StyMenuCont = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: ${({ open }) =>
    open
      ? "visibility 0s ease-in-out, opacity .3s ease-in-out"
      : "visibility 0s ease-in-out .2s, opacity .3s ease-in-out .2s"};
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
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 1000;
`;

const MyInfoCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const StyProfileImg = styled.div`
  min-width: 66px;
  height: 66px;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 100px;
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
    color: #fff !important;
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

    &:hover {
      color: #fff;
    }
  }
`;
