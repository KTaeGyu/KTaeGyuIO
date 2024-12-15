import { ActivityType } from "../Common.interface"

interface ContainerProps {
  selected?: boolean
}

type ActivityItemTitle = "Explorer" | "Search" | "Run and Debug" | "Extensions"

interface ActivityItemType extends ActivityType {
  title: ActivityItemTitle
}

export type { ActivityItemTitle, ActivityItemType, ContainerProps }
