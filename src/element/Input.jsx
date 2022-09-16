import styled from "styled-components";

export default function Input(props) {
  const { type, width, height, _onChange, bg } = props;

  const styles = {
    width,
    height,
    bg,
  };
  return <ElInput type={type} {...styles} onChange={_onChange}></ElInput>;
}

Input.defaultProps = {};

Input.defaultProps = {
  type: "text",
  width: "300px",
  height: "40px",
  bg: "#fafafa",
  _onChange: () => {},
};

const ElInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
`;
