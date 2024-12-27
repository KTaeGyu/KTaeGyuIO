import React from "react"
import { useAppSelector } from "../../../../../state/hooks"
import { selectOpenEditors } from "../../../../../state/slices/folderSlice"
import Tab from "./Tab"
import S from "./Tabs.styles"

export default function Tabs() {
  const openEditors = useAppSelector(selectOpenEditors)

  return (
    <S.Container>
      <S.Box>
        {openEditors.map((tab, idx) => (
          <Tab key={tab.route} {...tab} idx={idx} />
        ))}
      </S.Box>
    </S.Container>
  )
}