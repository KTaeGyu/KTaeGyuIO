import { Member } from "./MemberItem.interface"

interface ComponenetProps {
  onClick: (target: Member) => void
  authors: Member[]
  selected: Member | null
}

export type { ComponenetProps }
