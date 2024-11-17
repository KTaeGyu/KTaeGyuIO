import { MouseEventHandler } from "react"

interface ComponentProps extends ContainerProps {
  onClick: MouseEventHandler
}

interface ContainerProps {
  selected: string | null
}

export type { ComponentProps, ContainerProps }
