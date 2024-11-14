import { MenuItemType } from "../MenuItem.interface"

interface ContainerProps {
  position: "right" | "down"
}

interface ComponentProps extends ContainerProps {
  subsets: MenuItemType[]
}

export type { ComponentProps, ContainerProps }
