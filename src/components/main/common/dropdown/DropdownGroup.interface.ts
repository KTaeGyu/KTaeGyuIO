import { Dispatch, SetStateAction } from "react"

interface ComponentProps {
  subset: LayoutItem[]
  select: string
  setSelect: Dispatch<SetStateAction<string>>
  isEnd?: boolean
}

interface ContainerProps {
  $isEnd?: boolean
}

export type { ComponentProps, ContainerProps }
