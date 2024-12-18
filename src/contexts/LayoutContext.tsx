import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react"
import LAYOUT_ITEMS from "../constants/layoutValue"

interface LayoutValue {
  state: LayoutItem[]
}

const LayoutContext = createContext<LayoutValue>(null)

export default function LayoutProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState(LAYOUT_ITEMS)

  return (
    <LayoutContext.Provider value={{ state }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
