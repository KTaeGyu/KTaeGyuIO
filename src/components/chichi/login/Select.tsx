import React, { MouseEvent, MouseEventHandler, useState } from "react"
import { Chichi } from "../../../pages/chichi/login"
import { ComponentProps } from "./Select.interface"
import S from "./Select.styles"

export default function Select({ options, selected, onClick }: ComponentProps) {
  const [opened, setOpened] = useState(false)
  const onClickSelect: MouseEventHandler = () => {
    setOpened(!opened)
  }
  const onClickOption = (e: MouseEvent, option: Chichi) => {
    e.stopPropagation()
    onClick(option)
    setOpened(false)
  }

  return (
    <S.Container onClick={onClickSelect}>
      <S.Text selected={!!selected}>
        {selected ? selected : "선택해주세요"}
      </S.Text>
      <S.Chevron selected={!!selected} data-opened={opened} />
      {opened && (
        <S.Options>
          {options.map((option) => (
            <S.OptionItem
              key={option.name}
              onClick={(e) => onClickOption(e, option)}
            >
              {option.name}
            </S.OptionItem>
          ))}
        </S.Options>
      )}
    </S.Container>
  )
}
