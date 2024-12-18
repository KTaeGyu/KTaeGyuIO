import React, { useState } from "react"
import { ComponentProps } from "./Dropdown.interface"
import S from "./Dropdown.styles"
import DropdownGrop from "./DropdownGroup"

export default function Dropdown({
  subsets,
  position = "right",
}: ComponentProps) {
  const [select, setSelect] = useState("")

  return (
    <S.Container position={position}>
      {subsets.map((subset, idx) => (
        <DropdownGrop
          key={idx}
          subset={subset}
          select={select}
          setSelect={setSelect}
          isEnd={idx === subsets.length - 1}
        />
      ))}
    </S.Container>
  )
}
