import { navigate } from "gatsby"
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react"
import { Tab } from "../components/main/layout/main/tabs/Tab.interface"
import C from "../components/main/layout/primarySideBar/explorer/menus/folders/Folders.constant"
import { Path } from "../components/main/layout/primarySideBar/explorer/menus/folders/paths/Paths.interface"

interface FoldersValue {
  folders: Path[]
  openEditors: Tab[]
  setIsOpen: (pathname: string) => void
  setEditors: {
    addEditor: (tab: Tab) => void
    removeEditor: (idx: number, isLocation: boolean) => void
  }
}

const FoldersContext = createContext<FoldersValue>(null)

export default function FoldersProvider({ children }: PropsWithChildren) {
  const [folders, setFolders] = useState(C.PATH)
  const [openEditors, setOpenEditors] = useState([
    { title: "Welcome.tsx", route: "/Welcome" },
    { title: "README.md", route: "/README.md" },
  ])
  // Folders 기능능
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
  // 특정 Route의 isOpen을 Toggle 하는 함수
  const setIsOpen = (pathname: string) => {
    const titles = pathname.split("/").filter(Boolean)
    setFolders((prev) => togglePath(prev, titles))
  }
  // Editors 기능
  const addEditor = ({ title, route }: Tab) => {
    if (openEditors.find((editor) => editor.route === route)) return
    setOpenEditors((prev) => [...prev, { title, route }])
  }
  const removeEditor = (idx: number, isLocation: boolean) => {
    setOpenEditors((prev) => {
      // 오류 처리
      if (idx < 0 || idx >= openEditors.length) {
        console.warn("Remove editor: invalid index")
        return
      }
      // 경로 이동
      if (isLocation && openEditors.length >= 2) {
        if (idx > 0) {
          navigate(prev[idx - 1].route)
        } else {
          navigate(prev[prev.length - 1].route)
        }
      } else if (isLocation) {
        navigate("/")
      }
      // 상태 갱신
      return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
    })
  }
  const setEditors = { addEditor, removeEditor }

  return (
    <FoldersContext.Provider
      value={{ folders, openEditors, setIsOpen, setEditors }}
    >
      {children}
    </FoldersContext.Provider>
  )
}

export function useFoldersContext() {
  const context = useContext(FoldersContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
