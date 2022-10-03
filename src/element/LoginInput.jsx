import React from "react";
import styled from "styled-components";

export default function LoginInput(props) {
  const {} = props;

  const styles = {};

  return (
    <InputContainer {...styles}>
      <input />
      <label></label>
    </InputContainer>
  );
}

LoginInput.defaultProps = {
  fontSize: "12px",
  bg: "#fafafa",
  width: "270px",
  height: "36px",
  padding: "11px",
  _onBlur: () => {},
  _onChange: () => {},
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
