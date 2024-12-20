import React from "react"
import { useLayoutContext } from "../../../../../contexts/LayoutContext"
import S from "./Activities.styles"
import ActivityItem from "./ActivityItem"

export default function Activities() {
  const { state: layoutState } = useLayoutContext()

  return (
    <S.Container>
      {layoutState.activities.map((activity) => (
        <ActivityItem key={activity.title} {...activity} />
      ))}
    </S.Container>
  )
}
