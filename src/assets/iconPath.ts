import { ReactElement, ReactSVGElement, SVGProps } from "react"

type Icon = (props: SVGProps<ReactSVGElement>) => ReactElement

interface IconPathProps {
  [key: string]: Icon
  Arrow: Icon
  More: Icon
  Layout: Icon
  LayoutSetting: Icon
  Search: Icon
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
  Arrow: require("./icons/Arrow.inline.svg"),
  Hamburger: require("./icons/Hamburger.inline.svg"),
  Layout: require("./icons/Layout.inline.svg"),
  LayoutSetting: require("./icons/LayoutSetting.inline.svg"),
  More: require("./icons/More.inline.svg"),
  Search: require("./icons/Search.inline.svg"),
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
