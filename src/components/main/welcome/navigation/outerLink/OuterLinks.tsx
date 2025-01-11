import React from "react"
import { OUTER_LINKS } from "../../../../../constants/folder"
import S from "../../Content.styles"
import OuterLink from "./OuterLink"

export default function OuterLinks() {
  return (
    <S.Container>
      <S.Title>Outer Links</S.Title>
      {OUTER_LINKS.map((link) => (
        <OuterLink key={link.title} {...link} />
      ))}
    </S.Container>
  )
}
