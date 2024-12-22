interface LayoutContextValueState {
  menus: LayoutItem<MenusTitle>[]
  layouts: LayoutItem<LayoutsTitle>[]
  activities: LayoutItem<ActivityTitle>[]
  primarySideBar: ActivityTitle
  pannelTabs: LayoutItem<PannelTabTitle>[]
  pannel: PannelTabTitle
}

type SetStateKey = "setLayoutsChecked" | "setPrimarySideBar" | "setPannel"

interface LayoutContextValue {
  state: LayoutContextValueState
  setState: { [key in SetStateKey]: (...args: any) => void }
  getItem: <T>(item: LayoutItem<T>[], title: T) => LayoutItem<T>
}
