import React from "react"
import { useAppSelector } from "../../../../../../../state/hooks"
import { selectFolders } from "../../../../../../../state/slices/folderSlice"
import Paths from "./paths/Paths"

export default function Folders() {
  const folders = useAppSelector(selectFolders)

  return <Paths items={folders} isRoot />
}
