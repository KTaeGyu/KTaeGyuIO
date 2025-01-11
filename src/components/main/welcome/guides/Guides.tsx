import React from "react"
import {} from "../../../../constants/folder"
import S from "../Content.styles"
import Guide from "./Guide"
import GUIDES from "./Guides.constant"

export default function Guides() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Guides</S.Title>
        {GUIDES.map((guide) => (
          <Guide key={guide.title} {...guide} />
        ))}
      </S.Container>
    </S.Wrapper>
  )
}
