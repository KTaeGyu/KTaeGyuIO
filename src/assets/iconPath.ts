import { ReactElement, ReactSVGElement, SVGProps } from "react"

type Icon = (props: SVGProps<ReactSVGElement>) => ReactElement

interface IconPathProps {
  [key: string]: Icon
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
