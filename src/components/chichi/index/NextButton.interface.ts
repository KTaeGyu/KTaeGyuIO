import { MouseEventHandler } from "react"
import { Member } from "./MemberItem.interface"

interface ComponentProps {
  chichi?: string
  selected: Member | null
  onClick: MouseEventHandler
}

export type { ComponentProps }
