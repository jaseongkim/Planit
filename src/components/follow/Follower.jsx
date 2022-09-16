import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getFollowerThunk } from "../../redux/modules/followSlice";
import FollowMember from "./FollowMember";

export default function Follower() {
  const memberId = localStorage.getItem("memberId");

  const dispatch = useDispatch();
  let followers = useSelector((state) => state.followSlice.follower);
  console.log(followers);

  useEffect(() => {
    dispatch(getFollowerThunk(memberId));
  }, [dispatch, memberId]);

  return (
    <Container>
      {followers.map((follow) => {
        return <FollowMember follow={follow} key={follow.followedMember} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
