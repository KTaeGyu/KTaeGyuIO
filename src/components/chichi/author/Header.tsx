import React from "react"
import S from "../Header.styles"
import { ComponentProps } from "./Header.interfacer"

export default function Header({ readerName, isMe }: ComponentProps) {
  return (
    <S.Container>
      <S.Title>
        {readerName}님의 <S.Green>트리</S.Green>
      </S.Title>
      <S.Description>
        {isMe ? (
          "장식을 클릭하여 응원의 말을 읽어보세요!"
        ) : (
          <>
            응원의 말을 남기고 트리를 꾸며주세요!
            <br />
            메세지는 최대 10개까지 저장됩니다.
          </>
        )}
      </S.Description>
    </S.Container>
  )
}
