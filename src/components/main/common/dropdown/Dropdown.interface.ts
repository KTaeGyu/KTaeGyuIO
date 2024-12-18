interface ContainerProps {
  position?: "right" | "down"
}

interface ComponentProps extends ContainerProps {
  subsets: LayoutItem[][]
}

export type { ComponentProps, ContainerProps }
