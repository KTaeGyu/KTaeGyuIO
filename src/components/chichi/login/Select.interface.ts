import { Chichi } from "../../../pages/chichi/login"

interface ComponentProps {
  options: Chichi[]
  selected: Chichi | null
  onClick: (option: Chichi) => void
}

interface TextProps {
  selected: string | null
}

interface ChevronProps {
  selected: string | null
  "data-opened": boolean
}

export type { ChevronProps, ComponentProps, TextProps }
