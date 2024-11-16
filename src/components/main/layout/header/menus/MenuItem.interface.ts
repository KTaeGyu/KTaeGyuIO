import { MouseEventHandler } from "react"

interface MenuItemType {
  text: string
  media?: number
  onClick?: MouseEventHandler
  subsets?: MenuItemType[]
}

interface ContainerProps {
  media?: number
}

export type { ContainerProps, MenuItemType }
