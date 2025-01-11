import { Tab } from "../../layout/main/tabs/Tab.interface"

interface Guide extends Tab {
  description?: string
  iconPath?: string
  recommand?: boolean
}

type ComponentProps = Guide

interface ContainerProps {
  $recommand?: boolean
}

export type { ComponentProps, ContainerProps, Guide }
