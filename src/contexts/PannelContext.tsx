import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react"

interface PannelValue {
  state: boolean
  setState: Dispatch<SetStateAction<boolean>>
}

const PannelContext = createContext<PannelValue>(null)

export default function PannelProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<boolean>(false)

  return (
    <PannelContext.Provider value={{ state, setState }}>
      {children}
    </PannelContext.Provider>
  )
}

export function usePannelConext() {
  const context = useContext(PannelContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
