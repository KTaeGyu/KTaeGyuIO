import { Path } from "./Paths.interface"

interface ComponentProps extends Path {
  isRoot?: boolean
  route?: string
}

interface ContainerProps {
  $isroot?: boolean
}

interface TitleBoxProps {
  $subsets?: boolean
  $islocation?: boolean
}

interface ChevronIconProps {
  $isopen?: boolean
}

export type { ChevronIconProps, ComponentProps, ContainerProps, TitleBoxProps }
