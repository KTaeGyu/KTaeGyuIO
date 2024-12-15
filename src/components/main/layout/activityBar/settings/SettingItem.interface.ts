import { ActivityType } from "../Common.interface"

type SettingItemTitle = "Accounts" | "Manage"

interface SettingItemType extends ActivityType {
  title: SettingItemTitle
}

export type { SettingItemTitle, SettingItemType }
