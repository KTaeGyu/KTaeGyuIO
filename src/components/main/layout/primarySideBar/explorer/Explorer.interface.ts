type ExplorerItemTitle =
  | "Open Editors"
  | "Folders"
  | "Outline"
  | "Timeline"
  | "NPM Scripts"

interface ExplorerMoreItem extends LayoutItem {
  title: ExplorerItemTitle
}

export type { ExplorerItemTitle, ExplorerMoreItem }
