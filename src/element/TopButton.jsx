import React from "react";
import styled from "styled-components";
import { top_icon } from "../static/images";

export default function TopButton({ setScrollTop }) {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return <StyTopBtn onClick={setScrollTop}></StyTopBtn>;
}

const StyTopBtn = styled.button`
  position: fixed;
  top: -20px;
  right: 16px;
  width: 48px;
  height: 48px;
  background: #fff url(${top_icon}) no-repeat center;
  border: none;
  border-radius: 100px;
`;
