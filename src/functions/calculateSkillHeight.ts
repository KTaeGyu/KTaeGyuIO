import { skill } from "../assets/data/skills"

const calculateSkillHeight = (skills: skill[]) => {
  return Math.floor(Math.ceil(skills.length / 3)) * 4
}

export default calculateSkillHeight
