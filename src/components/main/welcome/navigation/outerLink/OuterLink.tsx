import React from "react"
import filterExtention from "../../../../../functions/filterExtention"
import { Path } from "../../../layout/primarySideBar/explorer/menus/folders/Paths.interface"
import S from "./OuterLink.styles"

export default function OuterLink({ title, href }: Path) {
  const filtered = filterExtention(title)
  const charactorized = title.charAt(0).toUpperCase() + filtered.slice(1)

  return (
    <S.Container>
      <S.Title href={href}>{charactorized}</S.Title>
      <S.Href>{href}</S.Href>
    </S.Container>
  )
}
