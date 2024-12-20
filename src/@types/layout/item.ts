interface LayoutItem<T = string, S = string> {
  title: T
  shortcut?: string
  checked?: boolean
  disabled?: boolean
  subsets?: LayoutItem<S>[][]
  onClick?: React.MouseEventHandler
}
