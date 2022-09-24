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
    margin,
    display,
    width,
    height,
    backgroundColor,
    borderRadius,
    alignItems,
    justifyContent
  } = props;

  const styles = {
    // margin: margin,
    // width: width,
    // height: height,
    // padding: padding,
    // borderRadius: borderRadius,
    // textAlign: textAlign,
    margin: margin,
    display: display,
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    alignItems: alignItems,
    justifyContent: justifyContent
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
  margin: "0 auto",
  display: "flex",
  width: "100px",
  height: "100px",
  backgroundColor: "green",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center"

  
};

const ElCircle = styled.div`
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent},
`;
