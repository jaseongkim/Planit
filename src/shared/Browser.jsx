// React
import React, { useContext, useEffect, useState } from "react";
// React Component
import styled from "styled-components";
import Menu from "../components/hamburNavi/Menu";
import Router from "./Router";
import LogoPage from "../pages/LogoPage";
// Icons
import Stars from "../element/stars/Stars";
// Context API
import { AppContext } from "../context";

export default function Brower() {
  
  // Context API : opening & closing burgar navi
  const { open, setOpen } = useContext(AppContext);

  // Hook : To loading LogoPage
  const [loading, setLoading] = useState(true);

  // after rendering, trigger useEffect that has the setLoading.
  // The setLoading state will change to loading true
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Back>
      <MobileWrap open={open}>
        {loading === true ? (
          <LogoPage></LogoPage>
        ) : (
          <>
            <Router />
            <Menu open={open} setOpen={setOpen} />
          </>
        )}
      </MobileWrap>
      <Stars></Stars>
    </Back>
  );
}

const Back = styled.div`
  /* background: linear-gradient(180deg, #121212 0%, #0f3a71 60%, #2e5c97 100%); */
  background: linear-gradient(
    180deg,
    #121212 0%,
    #17519e 59.37%,
    #256ece 74.48%,
    #4c92f0 85.94%,
    #accbf9 100%
  );
`;

const MobileWrap = styled.div`
  position: relative;
  max-width: 375px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: ${(props) => (props.open ? "hidden" : "visible")};
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  z-index: 10;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }

  @media (max-width: 425px) {
    box-shadow: none;
  }
`;
