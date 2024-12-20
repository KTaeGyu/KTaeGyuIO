import { ExplorerMoreItem } from "../Explorer.interface"

interface ComponentProps extends ExplorerMoreItem {
  isFirst?: boolean
}

interface ContainerProps {
  $isfirst?: boolean
  $isfolder?: boolean
  $isOpen?: boolean
}

interface ChevronIconProps {
  $isOpen?: boolean
}

export type { ChevronIconProps, ComponentProps, ContainerProps }
