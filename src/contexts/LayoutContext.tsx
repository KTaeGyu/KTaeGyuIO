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
    return reduceSubset(layout, path)
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
  const [layout, setLayout] = useState(LAYOUT_ITEMS)
  const layouts = getSubset<LayoutsTitle>("LAYOUTS")
  const activities = getSubset<ActivityTitle>("ACTIVITIES")

  // setStates
  const setLayoutsChecked = (idx: number) => {
    const path = [...PATH.LAYOUTS, idx]
    setLayout((prev) =>
      prev.map((item, i) =>
        setItem(
          item,
          i,
          path,
          "checked",
          !layout[3].subsets[1][0].subsets[1][idx].checked
        )
      )
    )
  }

  const state = { menus: layout, layouts, activities }
  const setState = { setLayoutsChecked }

  return (
    <LayoutContext.Provider value={{ state, setState }}>
      {children}
    </LayoutContext.Provider>
  )
}

export function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (!context) throw new Error("useContext must be used within an Provider")
  return context
}
