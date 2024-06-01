import React, { useContext, useState } from "react"
import fields, { field } from "../../../assets/data/fields"
import allSkills, { skill } from "../../../assets/data/skills"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import calcH from "../../../functions/calculateSkillHeight"
import parseData from "../../../functions/parseSkillTabData"
import {
  CardsBox,
  Field,
  FieldTitle,
  Fields,
  Hr,
  Section,
  SkillCards,
  Title,
  Wrapper,
} from "../../../styles/portfolio/skills/skills"
import Skill from "./skill"

interface Controlls {
  tab: string
  skills: skill[]
  height: number
  select: number
}

const Skills = () => {
  // 데이터
  const { skillsRef } = useContext(PortfolioContext) || {}
  const [controls, setControls] = useState<Controlls>({
    tab: "",
    skills: allSkills,
    height: calcH(allSkills),
    select: -1,
  })

  // 탭 전환
  const handleTab = (data: field) => {
    const result = parseData(controls.tab, data)
    setControls(result)
  }

  return (
    <Section ref={skillsRef}>
      <Wrapper>
        <Title>Skills</Title>
        <Hr />
        <Fields>
          {fields.slice(1).map((field) => (
            <Field
              key={field.id}
              onClick={() => handleTab(field)}
              className={controls.tab === field.title ? "active" : ""}
            >
              <FieldTitle>{field.title}</FieldTitle>
            </Field>
          ))}
        </Fields>
        <CardsBox $height={controls.height}>
          <SkillCards>
            {controls.skills.map((skill) => (
              <Skill
                key={skill.id}
                skill={skill}
                controlls={controls}
                setControls={setControls}
              />
            ))}
          </SkillCards>
        </CardsBox>
      </Wrapper>
    </Section>
  )
}

export type { Controlls }
export default Skills
