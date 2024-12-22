import React from "react"
import { useLayoutContext } from "../../../../contexts/LayoutContext"
import Explorer from "./explorer/Explorer"
import Extensions from "./extensions/Extensions"
import Run from "./run/Run"
import Search from "./search/Search"

export default function PrimarySideBar() {
  const { state, getItem } = useLayoutContext()
  const isOpen = getItem(state.layouts, "Primary Side Bar").checked

  if (!isOpen) return null

  return state.primarySideBar === "Explorer" ? (
    <Explorer />
  ) : state.primarySideBar === "Search" ? (
    <Search />
  ) : state.primarySideBar === "Run" ? (
    <Run />
  ) : state.primarySideBar === "Extensions" ? (
    <Extensions />
  ) : null
}
