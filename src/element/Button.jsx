import styled from "styled-components";

export default function Button(props) {
  const {
    _onClick,
    children,
    display,
    margin,
    width,
    padding,
    borderRadius,
    textAlign,
    height,
    border,
    color,
    backgroundColor,
    disabled,
  } = props;

  const styles = {
    display: display,
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    borderRadius: borderRadius,
    textAlign: textAlign,
    border: border,
    color: color,
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <ElButton {...styles} onClick={_onClick} disabled={disabled}>
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
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;
