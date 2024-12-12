import React from "react"
import { usePrimarySideBarConext } from "../../../../contexts/PrimarySideBarCotext"
import Explorer from "./explorer/Explorer"
import Extensions from "./extensions/Extensions"
import RunAndDebug from "./runAndDebug/RunAndDebug"
import Search from "./search/Search"

export default function PrimarySideBar() {
  const { state } = usePrimarySideBarConext()
  return state === "Explorer" ? (
    <Explorer />
  ) : state === "Search" ? (
    <Search />
  ) : state === "Run and Debug" ? (
    <RunAndDebug />
  ) : state === "Extensions" ? (
    <Extensions />
  ) : null
}
