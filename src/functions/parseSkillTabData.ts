import { field } from "../assets/data/fields"
import skills from "../assets/data/skills"

const parseSkillTabData = (tab: string, data: field) => {
  let result = {
    tab: "",
    skills: skills,
    select: -1,
  }

  if (tab !== data.title) {
    result = {
      tab: data.title,
      skills: data.skills,
      select: -1,
    }
  }

  return result
}

export default parseSkillTabData
