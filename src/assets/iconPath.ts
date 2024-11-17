import { ReactElement, ReactSVGElement, SVGProps } from "react"

type Icon = (props: SVGProps<ReactSVGElement>) => ReactElement

interface IconPathProps {
  [key: string]: Icon
  Account: Icon
  Arrow: Icon
  ChevronDouble: Icon
  Explorer: Icon
  Extentions: Icon
  More: Icon
  Layout: Icon
  LayoutSetting: Icon
  RunAndDebug: Icon
  Plus: Icon
  Search: Icon
  Setting: Icon
  WindowClose: Icon
  WindowMaximize: Icon
  WindowMinimize: Icon
  WindowRestore: Icon
  // about
  Device: Icon
  Idea: Icon
  Rocket: Icon
  Timer: Icon
  Spanner: Icon
  // skills
  Close: Icon
  // projects
  Check: Icon
  Chevron: Icon
  Click: Icon
}

const IconPath: IconPathProps = {
  Account: require("./icons/Account.inline.svg"),
  Arrow: require("./icons/Arrow.inline.svg"),
  ChevronDouble: require("./icons/ChevronDouble.inline.svg"),
  Explorer: require("./icons/Explorer.inline.svg"),
  Extentions: require("./icons/Extentions.inline.svg"),
  Hamburger: require("./icons/Hamburger.inline.svg"),
  Layout: require("./icons/Layout.inline.svg"),
  LayoutSetting: require("./icons/LayoutSetting.inline.svg"),
  More: require("./icons/More.inline.svg"),
  RunAndDebug: require("./icons/RunAndDebug.inline.svg"),
  Plus: require("./icons/Plus.inline.svg"),
  Search: require("./icons/Search.inline.svg"),
  Setting: require("./icons/Setting.inline.svg"),
  WindowClose: require("./icons/WindowClose.inline.svg"),
  WindowMaximize: require("./icons/WindowMaximize.inline.svg"),
  WindowMinimize: require("./icons/WindowMinimize.inline.svg"),
  WindowRestore: require("./icons/WindowRestore.inline.svg"),
  // about
  Device: require("./icons/Device.inline.svg"),
  Idea: require("./icons/Idea.inline.svg"),
  Rocket: require("./icons/Rocket.inline.svg"),
  Timer: require("./icons/Timer.inline.svg"),
  Spanner: require("./icons/Spanner.inline.svg"),
  // skills
  Close: require("./icons/Close.inline.svg"),
  // projects
  Check: require("./icons/Check.inline.svg"),
  Chevron: require("./icons/Chevron.inline.svg"),
  Click: require("./icons/Click.inline.svg"),
}

export { Icon, IconPathProps }
export default IconPath
