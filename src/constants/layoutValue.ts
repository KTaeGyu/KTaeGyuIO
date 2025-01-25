import SHORTCUTS from "./shortcuts"

// Prepareing-Edit, Selection, Go, Run, Terminal
const Preparing: LayoutItem[][] = [[{ title: "Preparing...", disabled: true }]]

// File
const SaveSubset: LayoutItem[] = [
  { title: "Save", shortcut: SHORTCUTS["Save"] },
  { title: "Save As...", shortcut: SHORTCUTS["Save As..."] },
]
const ShareSubset: LayoutItem[] = [
  { title: "Share", subsets: [[{ title: "Copy kteagyu-io Link" }]] },
]
const FileSubsets: LayoutItem[][] = [SaveSubset, ShareSubset]

// 스크립트-브라우저 모드, Activities, Layouts, Appearence 등
// View-Palette
const PaletteSubset: LayoutItem[] = [
  { title: "Command Palette...", shortcut: SHORTCUTS["Command Palette..."] },
  { title: "Open View..." },
]
// View-Layout
const ViewportSubset: LayoutItem[] = [
  { title: "Full Screen", shortcut: SHORTCUTS["Full Screen"] },
]
const LayoutsSubset: LayoutItem<LayoutsTitle>[] = [
  { title: "Menu Bar", disabled: true },
  {
    title: "Primary Side Bar",
    shortcut: SHORTCUTS["Primary Side Bar"],
    checked: true,
  },
  { title: "Status Bar", disabled: true },
  { title: "Pannel", shortcut: SHORTCUTS["Pannel"], checked: false },
]
const LanguageSubset: LayoutItem[] = [
  { title: "Korean", checked: true },
  { title: "English", checked: false },
]
const AppearanceSubsets: LayoutItem[][] = [ViewportSubset, LayoutsSubset]
const LanguageSubsets: LayoutItem[][] = [LanguageSubset]
const WindowSubset: LayoutItem[] = [
  { title: "Appearance", subsets: AppearanceSubsets },
  { title: "Language", subsets: LanguageSubsets },
]
// View-Activities
const ActivitySubset: LayoutItem<ActivityTitle>[] = [
  { title: "Explorer", shortcut: SHORTCUTS["Explorer"] },
  { title: "Search", shortcut: SHORTCUTS["Search"] },
  { title: "Run", shortcut: SHORTCUTS["Run"] },
  { title: "Extensions", shortcut: SHORTCUTS["Extensions"] },
]
// View-PannelTab
const PannelTabSubset: LayoutItem[] = [
  { title: "Problems", shortcut: SHORTCUTS["Problems"] },
  { title: "Output", shortcut: SHORTCUTS["Output"] },
  { title: "Debug Console", shortcut: SHORTCUTS["Debug Console"] },
  { title: "Terminal", shortcut: SHORTCUTS["Terminal"] },
]
// View
const ViewSubsets: LayoutItem[][] = [
  PaletteSubset,
  WindowSubset,
  ActivitySubset,
  PannelTabSubset,
]

// Help-Welcome
const GuideSubset: LayoutItem[] = [
  { title: "Resume", shortcut: SHORTCUTS["Resume"] },
  { title: "Projects", shortcut: SHORTCUTS["Projects"] },
  { title: "Skills", shortcut: SHORTCUTS["Skills"] },
]
const GuideSubsets: LayoutItem[][] = [GuideSubset]
const WelcomeSubset: LayoutItem[] = [
  { title: "Welcome", shortcut: SHORTCUTS["Welcome"] },
  { title: "Show All Commands", shortcut: SHORTCUTS["Show All Commands"] },
  { title: "Guides", subsets: GuideSubsets },
]
// Help-Link
const LinkSubsets: LayoutItem[] = [
  { title: "Velog", shortcut: SHORTCUTS["Velog"] },
  { title: "Github", shortcut: SHORTCUTS["Github"] },
  { title: "Report Issue" },
]
const HelpSubsets: LayoutItem[][] = [WelcomeSubset, LinkSubsets]

const LAYOUT_ITEMS: LayoutItem<MenusTitle>[] = [
  { title: "File", subsets: FileSubsets },
  { title: "Edit", subsets: Preparing },
  { title: "Selection", subsets: Preparing },
  { title: "View", subsets: ViewSubsets },
  { title: "Go", subsets: Preparing },
  { title: "Run", subsets: Preparing },
  { title: "Terminal", subsets: Preparing },
  { title: "Help", subsets: HelpSubsets },
]

export { LanguageSubset, LayoutsSubset }
export default LAYOUT_ITEMS
