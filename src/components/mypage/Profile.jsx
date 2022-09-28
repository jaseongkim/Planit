import React from "react";
import styled from "styled-components";
import { profile_default, camera_icon } from "../../static/images";

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileWrap>
        <ProfileImage>
          <MyImage></MyImage>
          <button>
            <img src={camera_icon} alt="카메라 아이콘" />
          </button>
        </ProfileImage>
        <MyInfoWrap>
          <p>닉네임</p>
          {/* <FollowBox>
            <button>
              팔로워<span>12</span>
            </button>
            <button>
              팔로잉<span>12</span>
            </button>
          </FollowBox> */}
        </MyInfoWrap>
      </ProfileWrap>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  padding: 0 16px;
`;

const ProfileWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileImage = styled.div`
  position: relative;
  min-width: 66px;
  height: 66px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 24px;
    height: 24px;
    background: #d9d9d9;
    border: none;
    border-radius: 100px;
    z-index: 10;
  }
`;

const MyImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background: url(${profile_default}) no-repeat center;
`;

const MyInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 20px;

  p {
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
    width: 50%;
    text-align: left;
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
