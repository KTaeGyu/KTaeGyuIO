import React from "react"
import { ComponentProps } from "./Content.interface"
import Folders from "./folders/Folders"
import Outline from "./outline/Outline"
import Timeline from "./timeline/Timeline"

export default function Content({ type }: ComponentProps) {
  return type === "Open Editors" ? null : type === "Folders" ? (
    <Folders />
  ) : type === "Outline" ? (
    <Outline />
  ) : type === "Timeline" ? (
    <Timeline />
  ) : (
    type === "NPM Scripts" && null
  )
}
