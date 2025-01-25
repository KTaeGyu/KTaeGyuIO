import { colors } from "./colors.styles"

const spaceToken = 2
const tokenCount = 35
const space = {
  token: {
    2.5: `${spaceToken * 2.5}px`,
  },
}
for (let i = 1; i <= tokenCount; i++) {
  space.token[i] = `${spaceToken * i}px`
}

const fontSizes = {
  1: "13px",
  2: "11px",
  3: "12px",
  4: "40px",
  5: "24px",
  6: "18px",
  7: "32px",
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
    1.5: "24px",
    2: "26px",
    3: "34px",
    4: "48px",
  },
  container: { 1: "1024px" },
  header: { height: "35px" },
  icon: {
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
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
    padding: 0 ${space.token[4]};
    font-size: ${fontSizes[1]};
    line-height: ${fontSizes[1]};`,
  },
  icon: {
    22: `
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${sizes.token[1]};
    height: ${sizes.token[1]};
    border-radius: ${radii[1]};
    & > svg {
      width: ${sizes.icon[20]};
      height: ${sizes.icon[20]};
    }
    `,
  },
}

const scrolls = {
  1: `
&::-webkit-scrollbar {
  width: 14px;
  border: 1px solid #ffffff11;
}
&:hover::-webkit-scrollbar-thumb {
  background: #ffffff11;
}
&::-webkit-scrollbar-button {
  display: none;
}
  `,
}

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  sizes,
  radii,
  buttons,
  scrolls,
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
