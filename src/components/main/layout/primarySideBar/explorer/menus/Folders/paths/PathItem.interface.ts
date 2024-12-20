import { Path } from "./Paths.interface"

interface ComponentProps extends Path {
  isRoot?: boolean
  route?: string
}

interface ContainerProps {
  $isRoot?: boolean
}

interface TitleBoxProps {
  $subsets?: boolean
  $isLocation?: boolean
}

interface ChevronIconProps {
  $isOpen?: boolean
}

export type { ChevronIconProps, ComponentProps, ContainerProps, TitleBoxProps }
