import React, { useState } from "react"
import PROJECT_NAME from "../../../../../../constants/projectName"
import { useAppSelector } from "../../../../../../state/hooks"
import { selectFolders } from "../../../../../../state/slices/folderSlice"
import Paths from "./folders/Paths"
import { ComponentProps } from "./MenuItem.interface"
import S from "./MenuItem.styles"
import NpmScripts from "./npmScripts/NpmScripts"
import OpenEditors from "./openEditors/OpenEditors"
import Outline from "./outline/Outline"
import Timeline from "./timeline/Timeline"

export default function MenuItem({ title, isFirst }: ComponentProps) {
  const isFolder = title === "Folders"
  const filteredTitle = isFolder ? PROJECT_NAME : title
  const [isOpen, setIsOpen] = useState(isFolder)
  const folders = useAppSelector(selectFolders)

  return (
    <S.Container $isFirst={isFirst} $isFolder={isFolder} $isOpen={isOpen}>
      <S.TitleBox onClick={() => setIsOpen(!isOpen)}>
        <S.ChevronIcon $isOpen={isOpen} viewBox="0 0 24 24" />
        <S.Title>{filteredTitle.toUpperCase()}</S.Title>
      </S.TitleBox>
      {isOpen && title === "Open Editors" ? (
        <OpenEditors />
      ) : title === "Folders" ? (
        <Paths items={folders} isRoot />
      ) : title === "Outline" ? (
        <Outline />
      ) : title === "Timeline" ? (
        <Timeline />
      ) : title === "NPM Scripts" ? (
        <NpmScripts />
      ) : null}
    </S.Container>
  )
}
