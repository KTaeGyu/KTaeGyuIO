import React from "react"
import { ComponentProps } from "./Content.interface"
import Folders from "./Folders/Folders"
import Outline from "./Outline/Outline"
import Timeline from "./Timeline/Timeline"

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
