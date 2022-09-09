import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Follower from "./Follower";
import Following from "./Following";

export default function FollowBox() {
  let [tab, setTab] = useState(0);

  return (
    <Container>
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
          >
            팔로워
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
          >
            팔로잉
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </Container>
  );
}

function TabContent(props) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [props.tab]);

  return (
    <div className={`start ${fade}`}>
      {[<Follower />, <Following />][props.tab]}
    </div>
  );
}

const Container = styled.div`
  background: #fff;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
`;
