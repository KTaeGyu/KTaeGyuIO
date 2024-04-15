import React, { useState } from "react"
import fields, { field } from "../../assets/data/fields"
import allSkills, { skill } from "../../assets/data/skills"
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
} from "../../styles/portfolio/skills"
import Skill from "./skill"

const Skills = () => {
  const [tab, setTab] = useState<string>("")
  const [skills, setSkills] = useState<skill[]>(allSkills)
  const [height, setHeight] = useState(
    Math.floor(Math.ceil(allSkills.length / 3)) * 4
  )
  const [select, setSelect] = useState(-1)

  const parseData = (tab: string, data: field) => {
    let result = {
      title: "",
      skills: allSkills,
      height: Math.floor(Math.ceil(allSkills.length / 3)) * 4,
    }

    if (tab !== data.title) {
      result = {
        title: data.title,
        skills: data.skills,
        height: Math.floor(Math.ceil(data.skills.length / 3)) * 4,
      }
    }

    return result
  }

  const handleTab = (data: field) => {
    const { title, height, skills } = parseData(tab, data)
    setTab(title)
    setHeight(height)
    setSkills(skills)
  }

  return (
    <Section>
      <Wrapper>
        <Title>Skills</Title>
        <Hr />
        <Fields>
          {fields.slice(1).map((field) => (
            <Field
              key={field.id}
              onClick={() => handleTab(field)}
              className={tab === field.title ? "active" : ""}
            >
              <FieldTitle>{field.title}</FieldTitle>
            </Field>
          ))}
        </Fields>
        <CardsBox $height={height}>
          <SkillCards>
            {skills.map((skill) => (
              <Skill
                key={skill.id}
                skill={skill}
                selected={select === skill.id}
                setSelect={setSelect}
              />
            ))}
          </SkillCards>
        </CardsBox>
      </Wrapper>
    </Section>
  )
}

export default Skills
