import React, { useContext, useState } from "react"
import fields, { field } from "../../../assets/data/fields"
import allSkills, { skill } from "../../../assets/data/skills"
import { PortfolioContext } from "../../../contexts/PortfolioContext"
import parseData from "../../../functions/parseSkillTabData"
import Skill from "./skill"
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
} from "./skills.styles"

interface Controlls {
  tab: string
  skills: skill[]
  select: number
}

const Skills = () => {
  // 데이터
  const { skillsRef } = useContext(PortfolioContext) || {}
  const [controls, setControls] = useState<Controlls>({
    tab: "",
    skills: allSkills,
    select: -1,
  })

  // 탭 전환
  const handleTab = (data: field) => {
    const result = parseData(controls.tab, data)
    setControls(result)
  }

  // 상세 전환

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
        <CardsBox>
          <SkillCards>
            {controls.skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </SkillCards>
        </CardsBox>
      </Wrapper>
    </Section>
  )
}

export type { Controlls }
export default Skills
