import React from "react"
import { useAppSelector } from "../../../../../state/hooks"
import { selectActivities } from "../../../../../state/slices/layoutSlice"
import S from "./Activities.styles"
import ActivityItem from "./ActivityItem"

export default function Activities() {
  const activities = useAppSelector(
    selectActivities
  ) as LayoutItem<ActivityTitle>[]

  return (
    <S.Container>
      {activities.map((activity) => (
        <ActivityItem key={activity.title} {...activity} />
      ))}
    </S.Container>
  )
}
