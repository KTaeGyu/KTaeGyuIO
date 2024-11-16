import { MouseEventHandler } from "react"

type Member = Pick<Author, "name" | "nickname" | "username" | "charactor">

interface ComponentProps extends Member {
  onClick: MouseEventHandler
}

export type { ComponentProps, Member }
