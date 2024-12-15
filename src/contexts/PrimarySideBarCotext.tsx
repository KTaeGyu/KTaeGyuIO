import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { ActivityItemTitle } from "../components/main/layout/activityBar/activities/ActivityItem.interface"

interface PrimarySideBarValue {
  state: ActivityItemTitle
  setState: Dispatch<SetStateAction<ActivityItemTitle>>
}

const PrimarySideBarContext = createContext<PrimarySideBarValue>(null)

export default function PrimarySideBarProvider({
  children,
}: PropsWithChildren) {
  const [state, setState] = useState<ActivityItemTitle>("Explorer")

  return (
    <PrimarySideBarContext.Provider value={{ state, setState }}>
      {children}
    </PrimarySideBarContext.Provider>
  )
}

export function usePrimarySideBarContext() {
  const context = useContext(PrimarySideBarContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
