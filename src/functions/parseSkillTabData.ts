import { field } from "../assets/data/fields"
import skills from "../assets/data/skills"
import calculateSkillHeight from "./calculateSkillHeight"

const parseSkillTabData = (tab: string, data: field) => {
  let result = {
    tab: "",
    skills: skills,
    height: calculateSkillHeight(skills),
    select: -1,
  }

  if (tab !== data.title) {
    result = {
      tab: data.title,
      skills: data.skills,
      height: calculateSkillHeight(data.skills),
      select: -1,
    }
  }

  return result
}

export default parseSkillTabData
