import { MouseEventHandler } from "react"

type Member = Pick<Author, "name" | "nickname" | "username" | "charactor">

interface ComponentProps extends Member, ContainerProps {
  onClick: MouseEventHandler
  selected: boolean
}

export type { ComponentProps, Member }
