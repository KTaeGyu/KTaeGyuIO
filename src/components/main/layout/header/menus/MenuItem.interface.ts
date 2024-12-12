import { MouseEventHandler } from "react"

interface MenuItemType {
  text: string
  media?: number
  onClick?: MouseEventHandler
  subsets?: MenuItemType[]
  disabled?: boolean
  checked?: boolean
}

interface ContainerProps {
  media?: number
  disabled?: boolean
}

interface TextProps {
  disabled?: boolean
}

export type { ContainerProps, MenuItemType, TextProps }
