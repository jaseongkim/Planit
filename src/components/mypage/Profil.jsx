import React from "react";
import styled from "styled-components";

export default function Profil() {
  return (
    <ProfilContainer>
      <ProfilWrap>
        <ProfilImage>
          <MyImage></MyImage>
        </ProfilImage>
        <ProfileInfo>
          <InfoNickName>닉네임</InfoNickName>
          <InfoFollowContainer>
            <InfoFollowWrap>
              <InfoFollow>팔로워</InfoFollow>
              <InfoFollowNum>15</InfoFollowNum>
            </InfoFollowWrap>
            <InfoFollowWrap>
              <InfoFollow>팔로잉</InfoFollow>
              <InfoFollowNum>15</InfoFollowNum>
            </InfoFollowWrap>
          </InfoFollowContainer>
        </ProfileInfo>
      </ProfilWrap>
    </ProfilContainer>
  );
}

const ProfilContainer = styled.div`
  padding: 0 24px;
  margin: 10px 0 10px 0;
`;

const ProfilWrap = styled.div`
  width: 334px;
  height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid white; */
`;

const ProfilImage = styled.div`
  width: 74px;
  height: 67px;
  /* border: 1px solid orange; */
`;

const MyImage = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 100px;
  background: gray;
`;

const ProfileInfo = styled.div`
  width: 230px;
  height: 67px;
  /* border: 1px solid yellow; */
`;

const InfoNickName = styled.div`
  width: 52px;
  height: 20px;
  margin-bottom: 26px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: white;
  /* border: 1px solid yellow; */
`;

const InfoFollowContainer = styled.div`
  width: 230px;
  height: 16px;
  display: flex;
  align-items: center;
  /* border: 1px solid yellow; */
`;

const InfoFollowWrap = styled.div`
  width: 67px;
  height: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  /* border: 1px solid green; */
`;

const InfoFollow = styled.div`
  width: 42px;
  height: 16px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: white;
  /* border: 1px solid red; */
`;
const InfoFollowNum = styled.div`
  width: 17px;
  height: 16px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: white;
  /* border: 1px solid red; */
`;
