interface ComponentProps {
  options: { name: string }[]
  selected: string | null
  onClick: (option: string) => void
}

interface TextProps {
  selected: string | null
}

interface ChevronProps {
  selected: string | null
  opened: boolean
}

export type { ChevronProps, ComponentProps, TextProps }
