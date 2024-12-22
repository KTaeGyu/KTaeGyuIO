import React from "react"
import { useLayoutContext } from "../../../../../contexts/LayoutContext"
import DebugConsole from "./debugConsole/DebugConsole"
import Output from "./output/Output"
import Problems from "./problems/Problems"
import Terminal from "./terminal/Terminal"

export default function Content() {
  const { state } = useLayoutContext()
  return state.pannel === "Problems" ? (
    <Problems />
  ) : state.pannel === "Output" ? (
    <Output />
  ) : state.pannel === "Debug Console" ? (
    <DebugConsole />
  ) : state.pannel === "Terminal" ? (
    <Terminal />
  ) : null
}
