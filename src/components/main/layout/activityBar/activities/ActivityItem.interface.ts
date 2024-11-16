import { ReactElement, ReactSVGElement, SVGProps } from "react"

interface ContainerProps {
  selected?: boolean
}

interface ActivityItemType {
  Icon: (props: SVGProps<ReactSVGElement>) => ReactElement
}

type ComponentProps = ContainerProps & ActivityItemType

export type { ActivityItemType, ComponentProps, ContainerProps }
