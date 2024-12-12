import { ReactElement, ReactSVGElement, SVGProps } from "react"

interface ContainerProps {
  selected?: boolean
}

type ActivityItemTitle = "Explorer" | "Search" | "Run and Debug" | "Extensions"

interface ActivityItemType {
  title: ActivityItemTitle
  Icon: (props: SVGProps<ReactSVGElement>) => ReactElement
}

export type { ActivityItemTitle, ActivityItemType, ContainerProps }
