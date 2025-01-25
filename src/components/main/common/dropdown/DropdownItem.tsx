import React from "react"
import useDropdown from "../../../../hooks/useDropdown"
import { useAppDispatch } from "../../../../state/hooks"
import { setLanguageChecked } from "../../../../state/slices/layoutSlice"
import Dropdown from "./Dropdown"
import { ComponentProps } from "./DropdownItem.interface"
import S from "./DropdownItem.styles"

export default function DropdownItem({
  title,
  subsets,
  checked,
  disabled,
  shortcut,
  select,
  setSelect,
}: ComponentProps) {
  const dispatch = useAppDispatch()
  const { ref, isOpen, open, onMouseEnter, onMouseLeave } = useDropdown({
    value: title,
    select,
    setSelect,
  })
  const isSelect = title === select && isOpen
  // 마우스 이벤트 주입
  const onClick = () => {
    // Languages
    if (title === "Korean") dispatch(setLanguageChecked(0))
    else if (title === "English") dispatch(setLanguageChecked(1))
  }

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
