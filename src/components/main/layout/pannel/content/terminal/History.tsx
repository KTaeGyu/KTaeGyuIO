import React from "react"
import Directory from "./Directory"
import { ComponentProps } from "./History.interfact"
import S from "./Terminal.styles"

export default function History({ history }: ComponentProps) {
  return (
    <>
      <Directory />
      <S.Line>$ {history}</S.Line>
    </>
  )
}
