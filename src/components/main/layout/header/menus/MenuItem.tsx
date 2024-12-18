import React from "react"
import useDropdown from "../../../../../hooks/useDropdown"
import Dropdown from "../../../common/dropdown/Dropdown"
import { ComponentProps } from "./MenuItem.interface"
import S from "./MenuItem.styles"

export default function MenuItem({ title, subsets, media }: ComponentProps) {
  const { ref, isOpen, toggleOpen } = useDropdown()

  return (
    <S.Container
      ref={ref}
      $media={media}
      className={isOpen && "active"}
      onClick={toggleOpen}
    >
      <S.Text>{title}</S.Text>
      {isOpen && <Dropdown subsets={subsets} position="down" />}
    </S.Container>
  )
}
