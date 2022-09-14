import styled from "styled-components";

export default function Button(props) {
  const {
    _onClick,
    children,
    margin,
    width,
    padding,
    borderRadius,
    textAlign,
    height,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    borderRadius: borderRadius,
    textAlign: textAlign,
  };

  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </>
  );
}

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: "0px",
  width: "100%",
  height: "0px",
  padding: "0px",
  borderRadius: "0px",
  textAlign: "center",
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
`;
