import React from "react"
import { skill } from "../../../assets/data/skills"
import {
  Container,
  Logo,
  LogoBox,
  Name,
  Title,
  Wrapper,
} from "../../../styles/portfolio/skills/skill"
import Level from "./level"

interface SkillProp {
  skill: skill
}

const Skill = ({ skill }: SkillProp) => {
  // 데이터
  const { logo, title, level } = skill

  return (
    <Wrapper>
      <Container>
        <Title>
          <LogoBox>
            <Logo src={`images/skills/${logo}.webp`} alt={title} />
          </LogoBox>
          <Name>{title}</Name>
          <Level level={level.level} />
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Skill
