interface feature {
  icon: string
  title: string
  content: string
}

const features: feature[] = [
  {
    icon: "Spanner",
    title: "유지보수",
    content:
      "유지보수가 용이하도록 가독성 높은 코드를 작성하려 노력하고 있습니다.",
  },
  {
    icon: "Idea",
    title: "직관적 UI",
    content:
      "직관적이고 쉬운 UI/UX를 통해 사용자에게 더 나은 경험을 제공하려 노력하고 있습니다.",
  },
  {
    icon: "Device",
    title: "반응형",
    content:
      "반응형 레이아웃으로 다양한 기기에서 호환되도록 개발하고자 합니다.",
  },
  {
    icon: "Timer",
    title: "빠른 로딩",
    content:
      "로딩 시간을 줄여 사용자가 불편함을 느끼지 않도록 하려 노력합니다.",
  },
  {
    icon: "Rocket",
    title: "에니메이션",
    content:
      "적절한 애니메이션으로 페이지에 생명을 불어 넣는 개발자가 되고자 합니다.",
  },
]

export type { feature }
export default features
