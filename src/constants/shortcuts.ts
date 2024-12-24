const SHORTCUTS = {
  Save: ["Ctrl", "S"],
  "Save As...": ["Ctrl", "Shift", "S"],
  "Command Palette...": ["Ctrl", "Shift", "P"],
  "Full Screen": ["F11"],
  "Primary Side Bar": ["Ctrl", "B"],
  Pannel: ["Ctrl", "J"],
  Explorer: ["Ctrl", "Shift", "E"],
  Search: ["Ctrl", "Shift", "F"],
  Run: ["Ctrl", "Shift", "D"],
  Extensions: ["Ctrl", "Shift", "X"],
  Problems: ["Ctrl", "Shift", "M"],
  Output: ["Ctrl", "Shift", "U"],
  "Debug Console": ["Ctrl", "Shift", "Y"],
  Terminal: ["Ctrl", "`"],
  "Show All Commands": ["Ctrl", "Shift", "P"],
  Resume: ["Ctrl", "Alt", "R"],
  Projects: ["Ctrl", "Alt", "P"],
  Skills: ["Ctrl", "Alt", "S"],
  Welcome: ["Ctrl", "Alt", "W"],
  Velog: ["Ctrl", "Alt", "V"],
  Github: ["Ctrl", "Alt", "G"],
}

const MAIN_SHORTCUT = {
  Resume: SHORTCUTS.Resume,
  Projects: SHORTCUTS.Projects,
  Skills: SHORTCUTS.Skills,
  Welcome: SHORTCUTS.Welcome,
  Velog: SHORTCUTS.Velog,
  Github: SHORTCUTS.Github,
}

export { MAIN_SHORTCUT }
export default SHORTCUTS
