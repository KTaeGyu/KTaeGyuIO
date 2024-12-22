import { Path } from "./Paths.interface"

interface ComponentProps extends Path {
  route?: string
}

interface TitleBoxProps {
  $subsets?: boolean
  $isLocation?: boolean
}

interface ChevronIconProps {
  $isOpen?: boolean
}

export type { ChevronIconProps, ComponentProps, TitleBoxProps }
