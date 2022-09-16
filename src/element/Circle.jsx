import styled from "styled-components";

export default function Circle(props) {
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
      <ElCircle {...styles} onClick={_onClick}>
        {children}
      </ElCircle>
    </>
  );
}

Circle.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: "0px",
  width: "100%",
  height: "0px",
  padding: "0px",
  borderRadius: "0px",
  textAlign: "center",
  // display: "flex",
  // width: "100px",
  // height: "100px",
  // background-color: "green",
  // border-radius: "50%",
};

const ElCircle = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
`;
