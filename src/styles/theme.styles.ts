import { colors } from "./colors.styles"

const space = {
  1: "4px",
  1.5: "6px",
  2: "8px",
  3: "12px",
  button: {
    12: "0 10px",
  },
}

const fontSizes = {
  0: "13.5px",
  1: "14.5px",
  button: {
    12: "16px",
  },
}

const fontWeights = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
}

// const maruBuriExtraLight = fontFace({
//   fontVariant: "MaruBuri",
//   fontDisplay: "swap",
//   fontStyle: "normal",
//   fontWeight: "300",
//   src: 'url("/fonts/MaruBuri-ExtraLight.ttf")',
// })

const fonts = {
  text: '"DM Sans", sans-serif',
  heading: '"DM Sans", sans-serif',
  mono: "DM Mono, Menlo, monospace",
  // maruBuriExtraLight
}

const lineHeights = {
  button: {
    12: "16px",
  },
}

const letterSpacings = {
  normal: "0",
  tight: "-0.02em",
  wide: "0.08em",
}

const sizes = {
  container: "1280px",
  narrow: "1024px",
  wide: "1440px",
  tight: "848px",
  avatar: "48px",
  navGroupBoxMin: "300px",
  navGroupBoxMax: "400px",
  navIcon: "32px",
  navIconSmall: "30px",
}

const radii = {
  1: "4px",
  2: "8px",
  max: "9999px",
}

const shadows = {
  large:
    "0px 4px 8px 0px #2E29330A, 0px 4px 24px 0px #2E293314, 0px 8px 24px 0px #473F4F29",
}

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  letterSpacings,
  sizes,
  radii,
  shadows,
}
