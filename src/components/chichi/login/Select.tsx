import React, { MouseEvent, MouseEventHandler, useState } from "react"
import { Chichi } from "../../../pages/chichi/login"
import { ComponentProps } from "./Select.interface"
import S from "./Select.styles"

export default function Select({ options, selected, onClick }: ComponentProps) {
  const [opened, setOpended] = useState(false)
  const onClickSelect: MouseEventHandler = () => {
    setOpended(!opened)
  }
  const onClickOption = (e: MouseEvent, option: Chichi) => {
    e.stopPropagation()
    onClick(option)
    setOpended(false)
  }

  return (
    <S.Container onClick={onClickSelect}>
      <S.Text selected={selected.name}>
        {selected ? selected.name : "선택해주세요"}
      </S.Text>
      <S.Chevron selected={selected.name} opened={opened} />
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
