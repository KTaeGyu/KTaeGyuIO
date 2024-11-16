import React from "react"
import C from "./Activities.constant"
import S from "./Activities.styles"
import ActivityItem from "./ActivityItem"

export default function Activities() {
  return (
    <S.Container>
      {C.Activites.map((activity, idx) => (
        <ActivityItem key={idx} {...activity} selected={idx === 1} />
      ))}
    </S.Container>
  )
}
