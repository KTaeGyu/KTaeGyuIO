import React from "react"
import { useFoldersContext } from "../../../../../../../contexts/FoldersContext"
import Paths from "./paths/Paths"

export default function Folders() {
  const { folders } = useFoldersContext()

  return <Paths items={folders} isRoot />
}
