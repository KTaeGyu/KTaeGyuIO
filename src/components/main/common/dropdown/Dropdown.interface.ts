interface ContainerProps {
  position?: "right" | "down" | "just-right" | "just-down"
}

interface ComponentProps extends ContainerProps {
  subsets: LayoutItem[][]
}

export type { ComponentProps, ContainerProps }
