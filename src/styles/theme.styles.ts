import { colors } from "./colors.styles"

const spaceToken = 2
const tokenCount = 30
const space = {
  token: {},
}
for (let i = 1; i <= tokenCount; i++) {
  space.token[i] = `${spaceToken * i}px`
}

const fontSizes = {
  1: "13px",
  2: "11px",
}

const fontWeights = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
}

const sizes = {
  token: {
    1: "22px",
    2: "26px",
  },
  container: "1280px",
  header: {
    height: "35px",
    itemHeight: "22px",
  },
  activity: {
    width: "48px",
  },
  icon: {
    10: "10px",
    12: "12px",
    14: "14px",
    18: "18px",
    20: "20px",
  },
}

const radii = {
  1: "4px",
  2: "8px",
  99: "9999px",
}

const buttons = {
  text: {
    22: `
    padding: 0 8px;
    font-size: 13px;
    line-height: 13px;`,
  },
  icon: {
    22: `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 4px;
    & > svg {
      width: 20px;
      height: 20px;
    }
    `,
  },
}

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  sizes,
  radii,
  buttons,
}

// Font Example

// const maruBuriExtraLight = fontFace({
//   fontVariant: "MaruBuri",
//   fontDisplay: "swap",
//   fontStyle: "normal",
//   fontWeight: "300",
//   src: 'url("/fonts/MaruBuri-ExtraLight.ttf")',
// })

// const fonts = {
//   maruBuriExtraLight,
// }
