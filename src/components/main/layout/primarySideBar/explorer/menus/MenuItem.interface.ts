import { ExplorerMoreItem } from "../Explorer.interface"

interface ComponentProps extends ExplorerMoreItem {
  isFirst?: boolean
}

interface ContainerProps {
  $isFirst?: boolean
  $isFolder?: boolean
  $isOpen?: boolean
}

interface ChevronIconProps {
  $isOpen?: boolean
}

export type { ChevronIconProps, ComponentProps, ContainerProps }
