import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react"
import { PATH } from "../constants/layoutPath"
import LAYOUT_ITEMS from "../constants/layoutValue"

const LayoutContext = createContext<LayoutContextValue>(null)

export default function LayoutProvider({ children }: PropsWithChildren) {
  // getter
  const reduceSubsets = (
    subsets: LayoutItem[][],
    path: number[]
  ): LayoutItem<any>[] => {
    if (path.length < 1) return null
    else return reduceSubset(subsets[path[0]], path.slice(1))
  }
  const reduceSubset = (
    subset: LayoutItem[],
    path: number[]
  ): LayoutItem<any>[] => {
    if (path.length < 1) return subset
    return reduceSubsets(subset[path[0]].subsets, path.slice(1))
  }
  function getSubset<T>(key: PathKey): LayoutItem<T>[] {
    const path = PATH[key]
    return reduceSubset(menus, path)
  }
  // setter
  const setItem = (
    item: LayoutItem<any>,
    i: number,
    path: number[],
    target: string,
    value: any
  ) => {
    if (path.length === 1) {
      return i === path[0]
        ? {
            ...item,
            [target]: value,
          }
        : item
    } else if (path.length < 1) return null

    return i === path[0]
      ? {
          ...item,
          subsets: item.subsets.map((subset, j) =>
            setSubsets(subset, j, path.slice(1), target, value)
          ),
        }
      : item
  }
  const setSubsets = (
    subset: LayoutItem<any>[],
    j: number,
    path: number[],
    target: string,
    value: any
  ) => {
    if (path.length < 1) return value as LayoutItem<any>[]
    return j === path[0]
      ? subset.map((item, i) => setItem(item, i, path.slice(1), target, value))
      : subset
  }

  // states
  const [menus, setMenus] = useState(LAYOUT_ITEMS)
  const layouts = getSubset<LayoutsTitle>("LAYOUTS")
  const activities = getSubset<ActivityTitle>("ACTIVITIES")
  const [primarySideBar, setPrimary] = useState<ActivityTitle>("Explorer")
  const pannelTabs = getSubset<PannelTabTitle>("PANNELTAB")
  const [pannel, setPannelTab] = useState<PannelTabTitle>("Terminal")

  // getItem
  function getItem<T = string>(subset: LayoutItem<T>[], title: T) {
    return subset.find((item) => item.title === title)
  }

  // setStates
  const setLayoutsChecked = (idx: number, value?: boolean) => {
    const path = [...PATH.LAYOUTS, idx]
    setMenus((prev) =>
      prev.map((item, i) => setItem(item, i, path, "checked", value))
    )
  }
  const setPrimarySideBar = (title: ActivityTitle) => {
    setPrimary((prev) => {
      const willOpen = prev !== title
      setLayoutsChecked(1, willOpen)
      return willOpen ? title : null
    })
  }
  const setPannel = (title: PannelTabTitle) => {
    setPannelTab(title)
  }

  const state = {
    menus,
    layouts,
    activities,
    primarySideBar,
    pannelTabs,
    pannel,
  }
  const setState = { setLayoutsChecked, setPrimarySideBar, setPannel }

  return (
    <LayoutContext.Provider value={{ state, setState, getItem }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
