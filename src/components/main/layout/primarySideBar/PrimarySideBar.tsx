import React from "react"
import { useAppSelector } from "../../../../state/hooks"
import {
  selectPrimarySideBar,
  selectPsbIsOpen,
} from "../../../../state/slices/layoutSlice"
import Explorer from "./explorer/Explorer"
import Extensions from "./extensions/Extensions"
import Run from "./run/Run"
import Search from "./search/Search"

export default function PrimarySideBar() {
  const isOpen = useAppSelector(selectPsbIsOpen)
  const primarySideBar = useAppSelector(selectPrimarySideBar)

  if (!isOpen) return null

  return primarySideBar === "Explorer" ? (
    <Explorer />
  ) : primarySideBar === "Search" ? (
    <Search />
  ) : primarySideBar === "Run" ? (
    <Run />
  ) : primarySideBar === "Extensions" ? (
    <Extensions />
  ) : null
}
