import styled from "styled-components";

export default function Circle(props) {
  const {
    _onClick,
    children,
    // margin,
    // width,
    // padding,
    // borderRadius,
    // textAlign,
    // height,
    display,
    width,
    height,
    backgroundColor,
    borderRadius,
  } = props;

  const styles = {
    // margin: margin,
    // width: width,
    // height: height,
    // padding: padding,
    // borderRadius: borderRadius,
    // textAlign: textAlign,
    display: display,
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius
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
  // margin: "0px",
  // width: "100%",
  // height: "0px",
  // padding: "0px",
  // borderRadius: "0px",
  // textAlign: "center",

  display: "flex",
  width: "100px",
  height: "100px",
  backgroundColor: "green",
  borderRadius: "50%",
};

const ElCircle = styled.div`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;
