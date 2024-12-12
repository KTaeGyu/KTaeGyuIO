import React, { useState } from "react"
import More from "../../../common/more/More"
import CommonS from "../PrimarySideBar.styles"
import C from "./Explorer.constant"
import Menus from "./menus/Menus"

export default function Explorer() {
  const clickHandler = (idx: number) =>
    setItems((prev) => {
      const newItem = [...prev]
      newItem[idx].checked = !prev[idx].checked
      return newItem
    })
  const initialItems = C.MORE_ITEMS.map((item, idx) => ({
    ...item,
    onClick: () => clickHandler(idx),
  }))
  const [items, setItems] = useState(initialItems)

  return (
    <CommonS.Container>
      <CommonS.TitleBox>
        <CommonS.Title>EXPLORER</CommonS.Title>
        <CommonS.TitleButtonBox>
          <More items={items} />
        </CommonS.TitleButtonBox>
      </CommonS.TitleBox>
      <Menus items={items} />
    </CommonS.Container>
  )
}
