import React from "react"
import { ComponentProps } from "./MemberItem.interface"
import S from "./MemberItem.styles"

export default function MemberItem({
  onClick,
  username,
  charactor,
  nickname,
}: ComponentProps) {
  return (
    <S.Container onClick={onClick}>
      <S.CharactorBox key={username}>
        <S.Charactor src={charactor.file.url} alt="이미지" />
      </S.CharactorBox>
      <S.NicknameBox>
        <S.Nickname>{nickname}</S.Nickname>
      </S.NicknameBox>
    </S.Container>
  )
}
