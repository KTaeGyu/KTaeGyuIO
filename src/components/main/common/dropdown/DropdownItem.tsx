import React from "react"
import useDropdown from "../../../../hooks/useDropdown"
import Dropdown from "./Dropdown"
import { ComponentProps } from "./DropdownItem.interface"
import S from "./DropdownItem.styles"

export default function DropdownItem({
  text,
  media,
  subsets,
  onClick,
  position,
  checked,
  disabled,
  select,
  setSelect,
}: ComponentProps) {
  const { ref, isOpen, toggleOpen, onMouseEnter, onMouseLeave } = useDropdown({
    value: text,
    select,
    setSelect,
  })
  const isSelect = text === select && isOpen

  return (
    <S.Container
      ref={ref}
      media={media}
      disabled={disabled}
      onClick={disabled ? undefined : subsets ? toggleOpen : onClick}
      onMouseEnter={!disabled ? onMouseEnter : undefined}
      onMouseLeave={!disabled ? onMouseLeave : undefined}
      $isSelect={isSelect}
    >
      {checked && <S.CheckIcon />}
      <S.Text disabled={disabled}>{text}</S.Text>
      {subsets && <S.ChevronIcon />}
      {subsets && isSelect && (
        <Dropdown subsets={subsets} position={position} />
      )}
    </S.Container>
  )
}
