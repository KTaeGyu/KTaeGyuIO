import { MenuItemType } from "../../header/menus/MenuItem.interface"

type ExplorerItemText =
  | "Open Editors"
  | "Folders"
  | "Outline"
  | "Timeline"
  | "NPM Scripts"

interface ExplorerMoreItem extends MenuItemType {
  text: ExplorerItemText
}

export type { ExplorerItemText, ExplorerMoreItem }
