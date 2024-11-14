import { MenuItemType } from "../MenuItem.interface"

interface ComponentProps extends MenuItemType {
  position?: "right" | "down"
}

export type { ComponentProps }
