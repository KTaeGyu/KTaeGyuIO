interface ComponentProps {
  posts?: Partial<Post>[]
  isMe: boolean
  onClick: (id: string) => void
}

export type { ComponentProps }
