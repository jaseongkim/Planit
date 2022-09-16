import React from "react";
import styled from "styled-components";

export default function FollowMember(props) {
  return (
    <UserWrap>
      <div>
        <span>
          <img
            src={props.follow.profileImgUrl}
            alt="userProfile"
            style={{ width: "50px", height: "50px" }}
          />
        </span>
        <UserNameWrap>
          <div>{props.follow.nickname}</div>
        </UserNameWrap>
      </div>
    </UserWrap>
  );
}

const UserWrap = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  & > div {
    display: flex;
    gap: 10px;
  }
`;

const UserNameWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  & > div:last-child {
    font-size: 12px;
    color: #6c6c6c;
  }
`;

const Button = styled.button`
  outline: 0;
  border: 0;
  border-radius: 2px;
  background: #f6f6f6;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
`;
