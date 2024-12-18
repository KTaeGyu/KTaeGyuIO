import { Dispatch, SetStateAction } from "react"

interface ComponentProps extends LayoutItem {
  position?: "right" | "down"
  select: string
  setSelect: Dispatch<SetStateAction<string>>
}

export type { ComponentProps }
