import React from "react"
import S from "./Navigation.styles"

export default function Navigation() {
  return (
    <S.Container>
      <S.Button>
        <S.BackIcon />
      </S.Button>
      <S.Button>
        <S.ForwardIcon />
      </S.Button>
    </S.Container>
  )
}
