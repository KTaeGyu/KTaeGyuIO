import React from "react"
import { useAppSelector } from "../../../../../../state/hooks"
import { selectPannelTabs } from "../../../../../../state/slices/layoutSlice"
import Tab from "./Tab"
import S from "./Tabs.styles"

export default function Tabs() {
  const pannelTabs = useAppSelector(
    selectPannelTabs
  ) as LayoutItem<PannelTabTitle>[]

  return (
    <S.Container>
      {pannelTabs.map((tab) => (
        <Tab key={tab.title} {...tab} />
      ))}
    </S.Container>
  )
}
