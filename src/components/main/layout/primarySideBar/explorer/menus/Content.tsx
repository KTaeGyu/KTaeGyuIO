import React from "react"
import { useAppSelector } from "../../../../../../state/hooks"
import { selectFolders } from "../../../../../../state/slices/folderSlice"
import { ExplorerItemTitle } from "../Explorer.interface"
import Folders from "./folders/Paths"
import Outline from "./outline/Outline"
import Timeline from "./timeline/Timeline"

export default function Content({ title }: { title: ExplorerItemTitle }) {
  const folders = useAppSelector(selectFolders)

  return title === "Open Editors" ? null : title === "Folders" ? (
    <Folders items={folders} isRoot />
  ) : title === "Outline" ? (
    <Outline />
  ) : title === "Timeline" ? (
    <Timeline />
  ) : (
    title === "NPM Scripts" && null
  )
}
