import React, { useState } from "react"
import More from "../../../common/more/More"
import CommonS from "../PrimarySideBar.styles"
import C from "./Explorer.constant"
import { ExplorerMoreItem } from "./Explorer.interface"
import Menus from "./menus/Menus"

export default function Explorer() {
  const setItemChecked = (item: ExplorerMoreItem, i: number, idx: number) => {
    i === idx ? { ...item, checked: !item.checked } : item
  }
  const onClick = (idx: number) =>
    setItems((prev) => prev.map((item, i) => setItemChecked(item, i, idx)))
  const initialItems = C.MORE_ITEMS.map((item, idx) => ({
    ...item,
    onClick: () => onClick(idx),
  }))
  const [items, setItems] = useState(initialItems)

  return (
    <CommonS.Container>
      <CommonS.TitleBox>
        <CommonS.Title>EXPLORER</CommonS.Title>
        <CommonS.TitleButtonBox>
          <More items={[items]} />
        </CommonS.TitleButtonBox>
      </CommonS.TitleBox>
      <Menus items={items} />
    </CommonS.Container>
  )
}
