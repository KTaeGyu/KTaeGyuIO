import { MenuItemType } from "../../header/menus/MenuItem.interface"

type ExplorerItemText =
  | "Open Editors"
  | "Folders"
  | "Outline"
  | "Timeline"
  | "NPM Scripts"

interface ExplorerMoreItem extends MenuItemType {
  text: ExplorerItemText
  isFirst?: boolean
}

export type { ExplorerItemText, ExplorerMoreItem }
