interface Path {
  title: string
  isOpen: boolean
  subsets?: Path[]
  href?: string
}

interface ComponentProps {
  items: Path[]
  isRoot?: boolean
  route?: string
}

export type { ComponentProps, Path }
