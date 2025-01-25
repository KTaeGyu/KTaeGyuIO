interface ContainerProps {
  position?: "right" | "down" | "just-right" | "just-down" | "just-down-left"
}

interface ComponentProps extends ContainerProps {
  subsets: LayoutItem[][]
}

export type { ComponentProps, ContainerProps }
