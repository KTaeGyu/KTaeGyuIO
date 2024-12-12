type LayoutItemTitle = "Primary Side Bar" | "Pannel" | "Secondary Side Bar"

interface LayoutItemType {
  title: LayoutItemTitle
  rotate: string | number
}

interface LayoutIconProps {
  disabled?: boolean
}

export type { LayoutIconProps, LayoutItemTitle, LayoutItemType }
