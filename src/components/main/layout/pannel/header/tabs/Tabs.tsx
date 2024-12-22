import React from "react"
import { useLayoutContext } from "../../../../../../contexts/LayoutContext"
import Tab from "./Tab"
import S from "./Tabs.styles"

export default function Tabs() {
  const { state } = useLayoutContext()

  return (
    <S.Container>
      {state.pannelTabs.map((tab) => (
        <Tab key={tab.title} {...tab} />
      ))}
    </S.Container>
  )
}
