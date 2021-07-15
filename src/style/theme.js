const color = {
  grayLight: "#eee",
  grayNormal: "#E1E2E3",
  grayDeep: "#9F9F9F",
  blue: "#456EED",
  blueLine: "#558DE8",
};

export const size = {
  tablet: "986px",
  mobile: "800px",
};

const theme = {
  color,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
};

export default theme;
