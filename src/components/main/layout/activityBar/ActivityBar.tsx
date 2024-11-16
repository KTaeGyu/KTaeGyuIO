import React from "react"
import Activities from "./activities/Activities"
import S from "./ActivityBar.styles"
import Settings from "./settings/Settings"

export default function ActivityBar() {
  return (
    <S.Container>
      <Activities />
      <Settings />
    </S.Container>
  )
}
