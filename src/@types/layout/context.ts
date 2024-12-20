interface LayoutContextValueState {
  menus: LayoutItem<MenusTitle>[]
  layouts: LayoutItem<LayoutsTitle>[]
  activities: LayoutItem<ActivityTitle>[]
}

type SetStateKey = "setLayoutsChecked"

interface LayoutContextValue {
  state: LayoutContextValueState
  setState: { [key in SetStateKey]: (...args: any) => void }
}
