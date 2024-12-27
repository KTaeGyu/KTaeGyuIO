import React from "react"
import { useAppSelector } from "../../../../../../state/hooks"
import { selectFolders } from "../../../../../../state/slices/folderSlice"
import { ComponentProps } from "./Content.interface"
import Paths from "./folders/Paths"
import Outline from "./outline/Outline"
import Timeline from "./timeline/Timeline"

export default function Content({ type }: ComponentProps) {
  const folders = useAppSelector(selectFolders)

  return type === "Open Editors" ? null : type === "Folders" ? (
    <Paths items={folders} isRoot />
  ) : type === "Outline" ? (
    <Outline />
  ) : type === "Timeline" ? (
    <Timeline />
  ) : (
    type === "NPM Scripts" && null
  )
}
