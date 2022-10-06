import React from "react";
import styled from "styled-components";
import { top_icon } from "../static/images";

export default function TopButton({ y }) {
  return <StyTopBtn href="#header" y={y}></StyTopBtn>;
}

const StyTopBtn = styled.a`
  position: fixed;
  top: ${(props) => props.y}px;
  right: 16px;
  width: 48px;
  height: 48px;
  background: #fff url(${top_icon}) no-repeat center;
  border: none;
  border-radius: 100px;
`;
