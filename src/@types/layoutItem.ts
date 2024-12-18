interface LayoutItem<T = string> {
  title: T
  shortcut?: string
  checked?: boolean
  disabled?: boolean
  subsets?: LayoutItem[][]
  onClick?: React.MouseEventHandler
}
