import React, { useEffect, useState } from "react"
import { ComponentProps } from "./Dropdown.interface"
import S from "./Dropdown.styles"
import DropdownItem from "./DropdownItem"

export default function Dropdown({ subsets, position }: ComponentProps) {
  const [select, setSelect] = useState("")

  useEffect(() => {
    console.log(select)
  }, [select])

  return (
    <S.Container position={position}>
      {subsets.map((menu, idx) => (
        <DropdownItem
          key={idx}
          {...menu}
          select={select}
          setSelect={setSelect}
        />
      ))}
    </S.Container>
  )
}
