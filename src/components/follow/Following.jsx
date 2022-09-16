import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getFollowingThunk } from "../../redux/modules/followSlice";
import FollowMember from "./FollowMember";

export default function Following() {
  const memberId = localStorage.getItem("memberId");

  const dispatch = useDispatch();
  let followers = useSelector((state) => state.followSlice.following);
  console.log(followers);

  useEffect(() => {
    dispatch(getFollowingThunk(memberId));
  }, [dispatch, memberId]);

  return (
    <Container>
      {followers.map((follow) => {
        return <FollowMember follow={follow} key={follow.followingMember} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
