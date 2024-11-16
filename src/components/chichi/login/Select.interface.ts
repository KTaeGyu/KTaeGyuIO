import { MouseEventHandler } from "react"

interface ComponentProps {
  options: { name: string }[]
  selected: string | null
  onClick: MouseEventHandler
}

export type { ComponentProps }
