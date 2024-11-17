import { navigate } from "gatsby"
import React from "react"
import { ComponentProps } from "./Buttons.interface"
import S from "./Buttons.styles"

export default function Buttons({ isMe, onClickPost }: ComponentProps) {
  return (
    <S.Container>
      <S.BackButtonBox>
        <S.BackButton onClick={() => navigate(-1)}>
          <S.BackIcon />
        </S.BackButton>
      </S.BackButtonBox>
      {!isMe && (
        <S.PostButton onClick={onClickPost}>
          <S.PostIcon />
        </S.PostButton>
      )}
    </S.Container>
  )
}
