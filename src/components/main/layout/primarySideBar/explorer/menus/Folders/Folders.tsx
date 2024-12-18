import React from "react"
import { useFoldersContext } from "../../../../../../../contexts/FoldersContext"
import Paths from "./paths/Paths"

export default function Folders() {
  const { state } = useFoldersContext()

  return <Paths items={state} isRoot />
}
