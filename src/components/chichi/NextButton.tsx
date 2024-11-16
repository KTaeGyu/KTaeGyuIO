import React from "react"
import { ComponentProps } from "./NextButton.interface"
import S from "./NextButton.styles"

export default function NextButton({ onClick, selected }: ComponentProps) {
  return (
    <S.Container onClick={onClick} disabled={!selected}>
      {selected ? (
        <>
          {selected.nickname}의 트리 꾸미러 가기
          <S.ChevronDouble />
        </>
      ) : (
        "트리를 꾸밀 대상을 선택해주세요"
      )}
    </S.Container>
  )
}
