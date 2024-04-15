import React from "react"
import { Image } from "../../styles/portfolio/team"

interface size {
  period: string
  personnel: number
}

interface page {
  id: number
  content: JSX.Element
}

interface field {
  title: string
  skills: string[]
}

interface url {
  title: string
  link: string
}

interface team {
  id: number
  title: string
  size: size
  pages: page[]
  abstract: string
  descript: JSX.Element // p tag 안에 b, span 등으로 꾸미기
  readme: string // md 형식
  features: string
  fields: field[]
  urls: url[]
}

let id = 0

const teams: team[] = [
  {
    id: id++,
    title: "Wondoo",
    size: {
      period: "2024.01.03 ~ 2024.02.16",
      personnel: 6,
    },
    pages: [
      {
        id: 0,
        content: <Image src="/images/sampleCard.png" alt="샘플이미지" />,
      },
      {
        id: 1,
        content: <Image src="/images/sampleCard.png" alt="샘플이미지" />,
      },
    ],
    abstract: "개발자를 위한 학습 공유 플랫폼",
    descript: (
      <p>준비중... 어떤걸 배웠는지... 뭘 구현했는지... 내 역할은 뭔지...</p>
    ),
    readme: ``,
    features: "",
    fields: [
      {
        title: "FE",
        skills: ["React", "Typescript"],
      },
      {
        title: "BE",
        skills: ["Spring-Boot"],
      },
    ],
    urls: [
      {
        title: "Github",
        link: "https://github.com/sixprincesses",
      },
      {
        title: "notion",
        link: "https://www.notion.so/playcoding/8-6-93db189725fc456f8c498d4fb1aab6ac",
      },
    ],
  },

  {
    id: id++,
    title: "Wondoo",
    size: {
      period: "2024.01.03 ~ 2024.02.16",
      personnel: 6,
    },
    pages: [
      {
        id: 0,
        content: <Image src="/images/sampleCard.png" alt="샘플이미지" />,
      },
      {
        id: 1,
        content: <Image src="/images/sampleCard.png" alt="샘플이미지" />,
      },
    ],
    abstract: "개발자를 위한 학습 공유 플랫폼",
    descript: (
      <p>준비중... 어떤걸 배웠는지... 뭘 구현했는지... 내 역할은 뭔지...</p>
    ),
    readme: ``,
    features: "",
    fields: [
      {
        title: "FE",
        skills: ["React", "Typescript"],
      },
      {
        title: "BE",
        skills: ["Spring-Boot"],
      },
    ],
    urls: [
      {
        title: "Github",
        link: "https://github.com/sixprincesses",
      },
      {
        title: "notion",
        link: "https://www.notion.so/playcoding/8-6-93db189725fc456f8c498d4fb1aab6ac",
      },
    ],
  },
]

export type { team }
export default teams