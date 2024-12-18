import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react"
import C from "../components/main/layout/primarySideBar/explorer/menus/folders/Folders.constant"
import { Path } from "../components/main/layout/primarySideBar/explorer/menus/folders/paths/Paths.interface"

interface FoldersValue {
  state: Path[]
  setIsOpen: (pathname: string) => void
}

const FoldersContext = createContext<FoldersValue>(null)

export default function FoldersProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState(C.PATH)
  // State와 Titles를 이용하여 특정 Route의 IsOpen을 Toggle 하는 함수
  const togglePath = (paths: Path[], titles: string[]): Path[] => {
    return paths.map((path) => {
      if (path.title === titles[0]) {
        if (titles.length === 1) {
          return { ...path, isOpen: !path.isOpen }
        }
        if (path.subsets) {
          return {
            ...path,
            subsets: togglePath(path.subsets, titles.slice(1)),
          }
        }
      }
      return path
    })
  }
  const setIsOpen = (pathname: string) => {
    const titles = pathname.split("/").filter(Boolean)
    setState((prev) => togglePath(prev, titles))
  }

  return (
    <FoldersContext.Provider value={{ state, setIsOpen }}>
      {children}
    </FoldersContext.Provider>
  )
}

export function useFoldersContext() {
  const context = useContext(FoldersContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
