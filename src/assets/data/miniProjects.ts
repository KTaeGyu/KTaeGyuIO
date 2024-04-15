import { theme } from "../../styles/theme.css"
import imagePath from "../imagePath"

interface skill {
  name: string
  color: string
  background: string
}

interface mini {
  id: number
  cover: string
  icon: string
  title: string
  descript: string
  period: string
  skills: skill[]
  urls: string[]
}

const skills: { [key: string]: skill } = {
  React: {
    name: "React",
    color: theme.colors.perple,
    background: theme.colors.perple_bg,
  },
}

let id = 0

const personals: mini[] = [
  {
    id: id++,
    cover: imagePath.sample.default,
    icon: "💌",
    title: "이런 저런 서비스1",
    descript: "이런 특징을 가진 저런 서비스",
    period: "2023.06.07 ~ 2023.06.21",
    skills: [skills["React"]],
    urls: ["https://github.com", "https://velog.com"],
  },
  {
    id: id++,
    cover: imagePath.sample.default,
    icon: "💌",
    title: "이런 저런 서비스2",
    descript: "이런 특징을 가진 저런 서비스",
    period: "2023.06.07 ~ 2023.06.21",
    skills: [skills["React"]],
    urls: ["https://github.com", "https://velog.com"],
  },
  {
    id: id++,
    cover: imagePath.sample.default,
    icon: "💌",
    title: "이런 저런 서비스3",
    descript: "이런 특징을 가진 저런 서비스",
    period: "2023.06.07 ~ 2023.06.21",
    skills: [skills["React"]],
    urls: ["https://github.com", "https://velog.com"],
  },
  {
    id: id++,
    cover: imagePath.sample.default,
    icon: "💌",
    title: "이런 저런 서비스4",
    descript: "이런 특징을 가진 저런 서비스",
    period: "2023.06.07 ~ 2023.06.21",
    skills: [skills["React"]],
    urls: ["https://github.com", "https://velog.com"],
  },
]

export type { mini, skill }
export default personals
