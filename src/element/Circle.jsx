// Styled-component
import styled from "styled-components";

export default function Circle(props) {
  const {
    _onClick,
    children,
    margin,
    display,
    width,
    height,
    color,
    border,
    fontWeight,
    fontSize,
    backgroundColor,
    borderRadius,
    alignItems,
    justifyContent,
    textAlign,
    planetType,
    planetLevel,
    planetSize,
  } = props;

  const styles = {
    margin: margin,
    display: display,
    width: width,
    height: height,
    color: color,
    border: border,
    fontWeight: fontWeight,
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    alignItems: alignItems,
    justifyContent: justifyContent,
    textAlign: textAlign,
  };

  return (
    <>
      <ElCircle
        {...styles}
        onClick={_onClick}
        planetType={planetType}
        planetLevel={planetLevel}
        planetSize={planetSize}
      >
        {children}
      </ElCircle>
    </>
  );
}

Circle.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: "0 auto",
  display: "flex",
  width: "76px",
  height: "76px",
  color: "#fff",
  border: "1px solid #fff",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  textAlign: "center",
};

const ElCircle = styled.div`
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.theme.fontWeight.Bold};
`;
