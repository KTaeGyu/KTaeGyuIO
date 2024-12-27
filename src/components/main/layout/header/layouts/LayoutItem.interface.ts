interface ComponentProps extends Omit<LayoutItem<LayoutsTitle>, "onClick"> {
  onClick: (checked: boolean) => void
}

interface ContainerProps {
  $checked?: boolean
  $rotate?: number
}

export type { ComponentProps, ContainerProps }
