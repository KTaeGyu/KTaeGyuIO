import { MenuItemType } from "../../header/menus/MenuItem.interface"

const MORE_ITEMS: MenuItemType[] = [
  {
    text: "Open Editors",
  },
  {
    text: "Folders",
    disabled: true,
    checked: true,
  },
  {
    text: "Outline",
    checked: true,
  },
  {
    text: "Timeline",
    checked: true,
  },
  {
    text: "NPM Scripts",
  },
]

const C = { MORE_ITEMS }

export default C
