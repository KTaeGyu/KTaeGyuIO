interface ComponentProps {
  posts?: Post[]
  isMe: boolean
  onClick: (id: string) => void
}

export type { ComponentProps }
