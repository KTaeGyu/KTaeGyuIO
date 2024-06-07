import skills, { skill } from "./skills"

interface field {
  id: number
  title: string
  skills: skill[]
}

let field_id = 0

const fields: field[] = [
  {
    id: field_id++,
    title: "전체",
    skills: skills,
  },
  {
    id: field_id++,
    title: "언어",
    skills: skills.filter((item) => item.field_title === "언어"),
  },
  {
    id: field_id++,
    title: "프론트엔드",
    skills: skills.filter((item) => item.field_title === "프론트엔드"),
  },
  {
    id: field_id++,
    title: "모바일",
    skills: skills.filter((item) => item.field_title === "모바일"),
  },
  {
    id: field_id++,
    title: "게임",
    skills: skills.filter((item) => item.field_title === "게임"),
  },
  {
    id: field_id++,
    title: "백엔드",
    skills: skills.filter((item) => item.field_title === "백엔드"),
  },
  {
    id: field_id++,
    title: "데이터베이스",
    skills: skills.filter((item) => item.field_title === "데이터베이스"),
  },
  {
    id: field_id++,
    title: "데브옵스/인프라",
    skills: skills.filter((item) => item.field_title === "데브옵스/인프라"),
  },
  {
    id: field_id++,
    title: "테스팅 툴",
    skills: skills.filter((item) => item.field_title === "테스팅 툴"),
  },
  {
    id: field_id++,
    title: "협업 툴",
    skills: skills.filter((item) => item.field_title === "협업 툴"),
  },
]

export type { field }
export default fields
