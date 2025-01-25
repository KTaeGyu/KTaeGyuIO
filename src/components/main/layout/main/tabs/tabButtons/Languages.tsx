import React from "react"
import IconPath from "../../../../../../assets/iconPath"
import useDropdown from "../../../../../../hooks/useDropdown"
import { useAppSelector } from "../../../../../../state/hooks"
import { selectLanguage } from "../../../../../../state/slices/layoutSlice"
import Dropdown from "../../../../common/dropdown/Dropdown"
import S from "./TabButtons.styles"

export default function Languages() {
  const { ref, isOpen, open } = useDropdown()
  const LANGUAGES = useAppSelector(selectLanguage)

  return (
    <S.Button ref={ref} onClick={open}>
      <IconPath.Language viewBox="0 0 24 24" />
      {isOpen && <Dropdown subsets={[LANGUAGES]} position="just-down-left" />}
    </S.Button>
  )
}
