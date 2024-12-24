import React from "react"
import { useFoldersContext } from "../../../../../contexts/FoldersContext"
import Tab from "./Tab"
import S from "./Tabs.styles"

export default function Tabs() {
  const { openEditors } = useFoldersContext()
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
