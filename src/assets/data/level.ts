interface level {
  level: number
  description: string
}

const lang_level: level[] = [
  {
    level: 0,
    description: "기초 강의를 수료한 수준",
  },
  {
    level: 1,
    description: "구현된 코드를 보고 이해할 수 있는 수준",
  },
  {
    level: 2,
    description: "일정 수준의 알고리즘 문제를 풀 수 있는 수준",
  },
  {
    level: 3,
    description: "프로젝트를 진행 할 수 있는 수준",
  },
  {
    level: 4,
    description: "알고리즘의 성능개선이 가능한 수준",
  },
  {
    level: 5,
    description: "모든 상황에 능숙하게 대처 가능한 수준",
  },
]

const skill_level: level[] = [
  {
    level: 0,
    description: "기초 학습을 수료한 수준",
  },
  {
    level: 1,
    description: "간단한 구현을 해 본 수준",
  },
  {
    level: 2,
    description: "에러에 대처 가능한 수준",
  },
  {
    level: 3,
    description: "프로젝트를 진행할 수 있는 수준",
  },
  {
    level: 4,
    description: "기술에 대한 고찰을 통해 성능개선이 가능한 수준",
  },
  {
    level: 5,
    description: "대부분 상황에 능숙하게 대처 가능한 수준",
  },
]

export { lang_level, skill_level }
export type { level }
