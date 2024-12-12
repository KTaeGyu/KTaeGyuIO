import { Dispatch, SetStateAction } from "react"
import { MenuItemType } from "../../layout/header/menus/MenuItem.interface"

interface ComponentProps extends MenuItemType {
  position?: "right" | "down"
  select: string
  setSelect: Dispatch<SetStateAction<string>>
}

export type { ComponentProps }
