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
globalStyle("ol", {
  listStyle: "none",
})
globalStyle("ul", {
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
// input
globalStyle("input", {
  backgroundColor: "transparent",
  border: "none",
})
globalStyle("input:focus", {
  outline: "none",
})
// textarea
globalStyle("textarea", {
  backgroundColor: "transparent",
  border: "none",
})
globalStyle("textarea:focus", {
  outline: "none",
})
