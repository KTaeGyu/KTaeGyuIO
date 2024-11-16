import { MouseEventHandler } from "react"
import { Member } from "./MemberItem.interface"

interface ComponentProps {
  selected: Member | null
  onClick: MouseEventHandler
}

export type { ComponentProps }
