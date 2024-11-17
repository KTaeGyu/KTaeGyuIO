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
      <S.Text selected={selected}>
        {selected ? selected : "선택해주세요"}
      </S.Text>
      <S.Chevron selected={selected} opened={opened} />
      {opened && (
        <S.Options>
          {options.map(({ name }) => (
            <S.OptionItem key={name} onClick={(e) => onClickOption(e, name)}>
              {name}
            </S.OptionItem>
          ))}
        </S.Options>
      )}
    </S.Container>
  )
}
