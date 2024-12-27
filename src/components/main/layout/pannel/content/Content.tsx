import React from "react"
import { useAppSelector } from "../../../../../state/hooks"
import { selectPannel } from "../../../../../state/slices/layoutSlice"
import DebugConsole from "./debugConsole/DebugConsole"
import Output from "./output/Output"
import Problems from "./problems/Problems"
import Terminal from "./terminal/Terminal"

export default function Content() {
  const pannel = useAppSelector(selectPannel)

  return pannel === "Problems" ? (
    <Problems />
  ) : pannel === "Output" ? (
    <Output />
  ) : pannel === "Debug Console" ? (
    <DebugConsole />
  ) : pannel === "Terminal" ? (
    <Terminal />
  ) : null
}
