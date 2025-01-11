import React, { SVGProps } from "react"
import { ReactComponent as Accounts } from "./icons/Accounts.inline.svg"
import { ReactComponent as Arrow } from "./icons/Arrow.inline.svg"
import { ReactComponent as Bell } from "./icons/Bell.inline.svg"
import { ReactComponent as Check } from "./icons/Check.inline.svg"
import { ReactComponent as Chevron } from "./icons/Chevron.inline.svg"
import { ReactComponent as ChevronDouble } from "./icons/ChevronDouble.inline.svg"
import { ReactComponent as Click } from "./icons/Click.inline.svg"
import { ReactComponent as Close } from "./icons/Close.inline.svg"
import { ReactComponent as Device } from "./icons/Device.inline.svg"
import { ReactComponent as Explorer } from "./icons/Explorer.inline.svg"
import { ReactComponent as Extensions } from "./icons/Extensions.inline.svg"
import { ReactComponent as Hamburger } from "./icons/Hamburger.inline.svg"
import { ReactComponent as Idea } from "./icons/Idea.inline.svg"
import { ReactComponent as Layout } from "./icons/Layout.inline.svg"
import { ReactComponent as LayoutSetting } from "./icons/LayoutSetting.inline.svg"
import { ReactComponent as Manage } from "./icons/Manage.inline.svg"
import { ReactComponent as More } from "./icons/More.inline.svg"
import { ReactComponent as Overview } from "./icons/Overview.inline.svg"
import { ReactComponent as Plus } from "./icons/Plus.inline.svg"
import { ReactComponent as Profile } from "./icons/Profile.inline.svg"
import { ReactComponent as Projects } from "./icons/Projects.inline.svg"
import { ReactComponent as RemoteWindow } from "./icons/RemoteWindow.inline.svg"
import { ReactComponent as Rocket } from "./icons/Rocket.inline.svg"
import { ReactComponent as Run } from "./icons/Run.inline.svg"
import { ReactComponent as Search } from "./icons/Search.inline.svg"
import { ReactComponent as Skills } from "./icons/Skills.inline.svg"
import { ReactComponent as Spanner } from "./icons/Spanner.inline.svg"
import { ReactComponent as Timer } from "./icons/Timer.inline.svg"
import { ReactComponent as WindowClose } from "./icons/WindowClose.inline.svg"
import { ReactComponent as WindowMaximize } from "./icons/WindowMaximize.inline.svg"
import { ReactComponent as WindowMinimize } from "./icons/WindowMinimize.inline.svg"
import { ReactComponent as WindowRestore } from "./icons/WindowRestore.inline.svg"

type IconKeys =
  | "Accounts"
  | "Arrow"
  | "Bell"
  | "Check"
  | "Chevron"
  | "ChevronDouble"
  | "Click"
  | "Close"
  | "Device"
  | "Explorer"
  | "Extensions"
  | "Hamburger"
  | "Idea"
  | "Layout"
  | "LayoutSetting"
  | "More"
  | "Overview"
  | "Plus"
  | "Profile"
  | "Projects"
  | "RemoteWindow"
  | "Rocket"
  | "Run"
  | "Search"
  | "Skills"
  | "Manage"
  | "Spanner"
  | "Timer"
  | "WindowClose"
  | "WindowMaximize"
  | "WindowMinimize"
  | "WindowRestore"

type IconType = React.FC<SVGProps<SVGElement>>

const IconPath: { [key in IconKeys]: React.FC<SVGProps<SVGElement>> } = {
  Accounts,
  Arrow,
  Bell,
  ChevronDouble,
  Explorer,
  Extensions,
  Hamburger,
  Layout,
  LayoutSetting,
  Manage,
  More,
  Overview,
  RemoteWindow,
  Run,
  Plus,
  Profile,
  Projects,
  Search,
  Skills,
  WindowClose,
  WindowMaximize,
  WindowMinimize,
  WindowRestore,
  // about
  Device,
  Idea,
  Rocket,
  Timer,
  Spanner,
  // skills
  Close,
  // projects
  Check,
  Chevron,
  Click,
}

export type { IconType }
export default IconPath
