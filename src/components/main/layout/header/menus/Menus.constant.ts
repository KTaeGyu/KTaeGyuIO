import { MenuItemType } from "./MenuItem.interface"

const Menus: MenuItemType[] = [
  {
    text: "File",
    media: 1020,
    subsets: [{ text: "Save" }, { text: "Save as ..." }],
  },
  {
    text: "Edit",
    media: 1020,
  },
  {
    text: "View",
    media: 1020,
  },
  {
    text: "Option",
    media: 1225,
  },
  {
    text: "Help",
    media: 1250,
  },
]

const C = { Menus }

export default C
