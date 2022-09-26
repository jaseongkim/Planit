// Styled-component
import styled, { css } from "styled-components";
// Planets Imgs
import {
  A1,
  A2,
  A3,
  B1,
  B2,
  B3,
  C1,
  C2,
  C3,
  D1,
  D2,
  D3,
  E1,
  E2,
  E3,
} from "../static/images";

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
    backgroundColor,
    borderRadius,
    alignItems,
    justifyContent,
    fontSize,
    textAlign,
    planetType,
    planetLevel,
  } = props;

  const styles = {
    margin: margin,
    display: display,
    width: width,
    height: height,
    color: color,
    border: border,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    alignItems: alignItems,
    justifyContent: justifyContent,
    textAlign: textAlign,
    fontSize: fontSize
  };

  return (
    <>
      <ElCircle
        {...styles}
        onClick={_onClick}
        planetType={planetType}
        planetLevel={planetLevel}
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
  planetType: null,
  planetLevel: null,
};

const ElCircle = styled.div`
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};

  ${(props) => {
    switch (true) {
      // Type1
      case props.planetType === 1 && props.planetLevel === 1:
        return css`
          background-image: url(${A1});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 1 && props.planetLevel === 2:
        return css`
          background-image: url(${A2});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 1 && props.planetLevel === 3:
        return css`
          background-image: url(${A3});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      // Type2
      case props.planetType === 2 && props.planetLevel === 1:
        return css`
          background-image: url(${B1});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 2 && props.planetLevel === 2:
        return css`
          background-image: url(${B2});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 2 && props.planetLevel === 3:
        return css`
          background-image: url(${B3});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      // Type3
      case props.planetType === 3 && props.planetLevel === 1:
        return css`
          background-image: url(${C1});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 3 && props.planetLevel === 2:
        return css`
          background-image: url(${C2});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 3 && props.planetLevel === 3:
        return css`
          background-image: url(${C3});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      // Type4
      case props.planetType === 4 && props.planetLevel === 1:
        return css`
          background-image: url(${D1});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 4 && props.planetLevel === 2:
        return css`
          background-image: url(${D2});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 4 && props.planetLevel === 3:
        return css`
          background-image: url(${D3});
          background-position: center;
          background-size: contain;
          border: none;
        `;

      // Type5
      case props.planetType === 5 && props.planetLevel === 1:
        return css`
          background-image: url(${E1});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 5 && props.planetLevel === 2:
        return css`
          background-image: url(${E2});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      case props.planetType === 5 && props.planetLevel === 3:
        return css`
          background-image: url(${E3});
          background-position: center;
          background-size: contain;
          border: none;
        `;
      default:
        return css``;
    }
  }}
`;
