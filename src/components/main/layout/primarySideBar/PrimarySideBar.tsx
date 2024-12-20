import React from "react"
import { usePrimarySideBarContext } from "../../../../contexts/PrimarySideBarCotext"
import Explorer from "./explorer/Explorer"
import Extensions from "./extensions/Extensions"
import Run from "./run/Run"
import Search from "./search/Search"

export default function PrimarySideBar() {
  const { state } = usePrimarySideBarContext()

  return state === "Explorer" ? (
    <Explorer />
  ) : state === "Search" ? (
    <Search />
  ) : state === "Run" ? (
    <Run />
  ) : state === "Extensions" ? (
    <Extensions />
  ) : null
}
