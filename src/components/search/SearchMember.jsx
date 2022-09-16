import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMemberThunk } from "../../redux/modules/membersSlice";
import RecommendMember from "./RecommendMember";

export default function SearchUser() {
  const dispatch = useDispatch();
  let RecommendMembers = useSelector((state) => state.membersSlice.membersList);
  console.log(RecommendMembers);

  useEffect(() => {
    dispatch(getMemberThunk());
  }, [dispatch]);

  return (
    <Container>
      {RecommendMembers.map((members) => {
        return <RecommendMember members={members} key={members.id} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
