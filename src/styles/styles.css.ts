import { globalStyle } from "@vanilla-extract/css"
// all
globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
})
// body
globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})
// li
globalStyle("li", {
  listStyle: "none",
})
// button
globalStyle("button", {
  backgroundColor: "transparent",
  border: 0,
  cursor: "pointer",
  borderRadius: 4,
})
globalStyle("button:disabled", {
  cursor: "auto",
})
