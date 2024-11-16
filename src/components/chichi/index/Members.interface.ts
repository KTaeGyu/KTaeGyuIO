import { Member } from "./MemberItem.interface"

interface ComponenetProps {
  onClick: (target: Member) => void
  authors: Member[]
}

export type { ComponenetProps }
