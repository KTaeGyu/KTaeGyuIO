type ComponentProps = LayoutItem & {
  media: number
}

interface ContainerProps {
  disabled?: boolean
  $isSelect?: boolean
  $media?: number
  $hasSubset?: boolean
}

interface TextProps {
  disabled?: boolean
}

export type { ComponentProps, ContainerProps, TextProps }
