import { Chichi } from "../../../pages/chichi/login"

interface ComponentProps {
  options: { name: string }[]
  selected: string | null
  onClick: (option: Chichi) => void
}

interface TextProps {
  selected: string | null
}

interface ChevronProps {
  selected: string | null
  opened: boolean
}

export type { ChevronProps, ComponentProps, TextProps }
