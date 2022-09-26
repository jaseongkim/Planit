const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  ssmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xll: calcRem(22),
  xlll: calcRem(24),
};

const lineHeight = {
  ssmall: "18px",
  small: "22px",
  base: "24px",
  lg: "28px",
  xl: "30px",
  xll: "32px",
  xlll: "34px",
};

const fontWeight = {
  Regular: 400,
  Medium: 500,
  Bold: 700,
};

const paddings = {
  small: calcRem(12),
  base: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xll: calcRem(20),
  xlll: calcRem(22),
  xlv: calcRem(24),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xll: calcRem(16),
  xlll: calcRem(18),
  xlv: calcRem(20),
  xv: calcRem(22),
  xvl: calcRem(24)
};

const theme = {
  primaryDark: "#0D0C1D",
  primaryLight: "#EFFFFA",
  primaryHover: "#343078",
  mobile: "576px",
  fontSizes,
  lineHeight,
  fontWeight,
  paddings,
  margins,
};

export default theme;
