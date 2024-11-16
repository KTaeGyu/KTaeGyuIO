interface ComponentProps {
  options: { name: string }[]
  selected: string | null
  onClick: (option: string) => void
}

export type { ComponentProps }
