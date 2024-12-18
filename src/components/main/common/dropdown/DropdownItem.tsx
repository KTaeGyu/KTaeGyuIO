import React from "react"
import useDropdown from "../../../../hooks/useDropdown"
import Dropdown from "./Dropdown"
import { ComponentProps } from "./DropdownItem.interface"
import S from "./DropdownItem.styles"

export default function DropdownItem({
  title,
  subsets,
  onClick,
  checked,
  disabled,
  select,
  setSelect,
}: ComponentProps) {
  const { ref, isOpen, toggleOpen, onMouseEnter, onMouseLeave } = useDropdown({
    value: title,
    select,
    setSelect,
  })
  const isSelect = title === select && isOpen

  return (
    <S.Container
      ref={ref}
      disabled={disabled}
      onClick={disabled ? undefined : subsets ? toggleOpen : onClick}
      onMouseEnter={!disabled ? onMouseEnter : undefined}
      onMouseLeave={!disabled ? onMouseLeave : undefined}
      $isSelect={isSelect}
    >
      {checked && <S.CheckIcon />}
      <S.Text disabled={disabled}>{title}</S.Text>
      {subsets && <S.ChevronIcon />}
      {subsets && isSelect && <Dropdown subsets={subsets} />}
    </S.Container>
  )
}
