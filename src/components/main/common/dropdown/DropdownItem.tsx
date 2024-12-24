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
  shortcut,
  select,
  setSelect,
}: ComponentProps) {
  const { ref, isOpen, open, onMouseEnter, onMouseLeave } = useDropdown({
    value: title,
    select,
    setSelect,
  })
  const isSelect = title === select && isOpen

  return (
    <S.Container
      ref={ref}
      disabled={disabled}
      onClick={disabled ? undefined : subsets ? open : onClick}
      onMouseEnter={!disabled ? onMouseEnter : undefined}
      onMouseLeave={!disabled ? onMouseLeave : undefined}
      $isSelect={subsets && isSelect}
      $hasSubset={!!subsets}
    >
      {checked && <S.CheckIcon viewBox="0 0 24 24" />}
      <S.TextBox className="textBox">
        <S.Text disabled={disabled}>{title}</S.Text>
        {shortcut && <S.Text>{shortcut.join("+")}</S.Text>}
      </S.TextBox>
      {subsets && <S.ChevronIcon className="open" viewBox="0 0 24 24" />}
      {subsets && isSelect && <Dropdown subsets={subsets} />}
    </S.Container>
  )
}
