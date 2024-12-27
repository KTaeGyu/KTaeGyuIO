import Accounts from "./icons/Accounts.inline.svg"
import Arrow from "./icons/Arrow.inline.svg"
import Bell from "./icons/Bell.inline.svg"
import Check from "./icons/Check.inline.svg"
import Chevron from "./icons/Chevron.inline.svg"
import ChevronDouble from "./icons/ChevronDouble.inline.svg"
import Click from "./icons/Click.inline.svg"
import Close from "./icons/Close.inline.svg"
import Device from "./icons/Device.inline.svg"
import Explorer from "./icons/Explorer.inline.svg"
import Extensions from "./icons/Extensions.inline.svg"
import Hamburger from "./icons/Hamburger.inline.svg"
import Idea from "./icons/Idea.inline.svg"
import Layout from "./icons/Layout.inline.svg"
import LayoutSetting from "./icons/LayoutSetting.inline.svg"
import Manage from "./icons/Manage.inline.svg"
import More from "./icons/More.inline.svg"
import Plus from "./icons/Plus.inline.svg"
import RemoteWindow from "./icons/RemoteWindow.inline.svg"
import Rocket from "./icons/Rocket.inline.svg"
import Run from "./icons/Run.inline.svg"
import Search from "./icons/Search.inline.svg"
import Spanner from "./icons/Spanner.inline.svg"
import Timer from "./icons/Timer.inline.svg"
import WindowClose from "./icons/WindowClose.inline.svg"
import WindowMaximize from "./icons/WindowMaximize.inline.svg"
import WindowMinimize from "./icons/WindowMinimize.inline.svg"
import WindowRestore from "./icons/WindowRestore.inline.svg"

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
  | "Plus"
  | "RemoteWindow"
  | "Rocket"
  | "Run"
  | "Search"
  | "Manage"
  | "Spanner"
  | "Timer"
  | "WindowClose"
  | "WindowMaximize"
  | "WindowMinimize"
  | "WindowRestore"

const IconPath: { [key in IconKeys]: any } = {
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
  RemoteWindow,
  Run,
  Plus,
  Search,
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

export default IconPath
