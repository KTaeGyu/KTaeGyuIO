// Prepareing-Edit, Selection, Go, Run, Terminal
const Preparing: LayoutItem[][] = [[{ title: "Preparing...", disabled: true }]]

// File
const SaveSubset: LayoutItem[] = [
  { title: "Save", shortcut: "Ctrl+S" },
  { title: "Save As...", shortcut: "Ctrl+Shift+S" },
]
const ShareSubset: LayoutItem[] = [
  { title: "Share", subsets: [[{ title: "Copy kteagyu-io Link" }]] },
]
const FileSubsets: LayoutItem[][] = [SaveSubset, ShareSubset]

// 스크립트-브라우저 모드, Activities, Layouts, Appearence 등
// View-Palette
const PaletteSubset: LayoutItem[] = [
  { title: "Command Palette...", shortcut: "Ctrl+Shift+P" },
  { title: "Open View..." },
]
// View-Layout
const ViewportSubset: LayoutItem[] = [{ title: "Full Screen", shortcut: "F11" }]
const LayoutsSubset: LayoutItem<LayoutsTitle>[] = [
  { title: "Menu Bar", disabled: true },
  { title: "Primary Side Bar", shortcut: "Ctrl+B", checked: true },
  { title: "Status Bar", disabled: true },
  { title: "Pannel", shortcut: "Ctrl+J", checked: true },
]
const AppearanceSubsets: LayoutItem[][] = [ViewportSubset, LayoutsSubset]
const WindowSubset: LayoutItem[] = [
  { title: "Appearance", subsets: AppearanceSubsets },
]
// View-Activities
const ActivitySubset: LayoutItem<ActivityTitle>[] = [
  { title: "Explorer", shortcut: "Ctrl+Shift+E" },
  { title: "Search", shortcut: "Ctrl+Shift+F" },
  { title: "Run", shortcut: "Ctrl+Shift+D" },
  { title: "Extensions", shortcut: "Ctrl+Shift+X" },
]
// View-PannelTab
const PannelTabSubset: LayoutItem[] = [
  { title: "Problems", shortcut: "Ctrl+Shift+M" },
  { title: "Output", shortcut: "Ctrl+Shift+U" },
  { title: "Debug Console", shortcut: "Ctrl+Shift+Y" },
  { title: "Terminal", shortcut: "Ctrl+`" },
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
  { title: "Resume" },
  { title: "Projects" },
  { title: "Skills" },
]
const GuideSubsets: LayoutItem[][] = [GuideSubset]
const WelcomeSubset: LayoutItem[] = [
  { title: "Welcome" },
  { title: "Show All Commands", shortcut: "Ctrl+Shift+P" },
  { title: "Guides", subsets: GuideSubsets },
]
// Help-Link
const LinkSubsets: LayoutItem[] = [
  { title: "Velog" },
  { title: "Github" },
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

export { LayoutsSubset }
export default LAYOUT_ITEMS
