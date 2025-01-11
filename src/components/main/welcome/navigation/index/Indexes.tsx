import React from "react"
import S from "../../Content.styles"
import Index from "./Index"
import INDEXES from "./Indexes.contant"

export default function Indexes() {
  return (
    <S.Container>
      <S.Title>Index</S.Title>
      {INDEXES.map((index) => (
        <Index key={index.route} {...index} />
      ))}
    </S.Container>
  )
}
