interface Tab {
  title: string
  route: string
}

interface ComponentProps extends Tab {
  idx: number
}

interface ContainerProps {
  $isLocation?: boolean
}

interface TitleProps {
  $isLocation?: boolean
}

interface CloseButtonProps {
  $isLocation?: boolean
}

export type {
  CloseButtonProps,
  ComponentProps,
  ContainerProps,
  Tab,
  TitleProps,
}
