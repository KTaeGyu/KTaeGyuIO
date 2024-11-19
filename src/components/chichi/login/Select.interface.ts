import { Chichi } from "../../../pages/chichi/login"

interface ComponentProps {
  options: Chichi[]
  selected: string
  onClick: (option: Chichi) => void
}

interface TextProps {
  selected: boolean
}

interface ChevronProps {
  selected?: boolean
  "data-opened"?: boolean
}

export type { ChevronProps, ComponentProps, TextProps }
