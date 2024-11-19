import React from "react"
import { ComponentProps } from "./LoginButton.interface"
import S from "./LoginButton.styles"

export default function LoginButton({ selected, onClick }: ComponentProps) {
  return (
    <S.Container onClick={onClick} disabled={!selected}>
      트리 꾸미러 가기
    </S.Container>
  )
}
