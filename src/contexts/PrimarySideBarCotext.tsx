import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react"

interface PrimarySideBarValue {
  state: ActivityTitle
  onClickActivity: (title: string) => void
}

const PrimarySideBarContext = createContext<PrimarySideBarValue>(null)

export default function PrimarySideBarProvider({
  children,
}: PropsWithChildren) {
  const [state, setState] = useState<ActivityTitle>("Explorer")
  const onClickActivity = (title: ActivityTitle) => {
    setState(title)
  }

  return (
    <PrimarySideBarContext.Provider value={{ state, onClickActivity }}>
      {children}
    </PrimarySideBarContext.Provider>
  )
}

export function usePrimarySideBarContext() {
  const context = useContext(PrimarySideBarContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
