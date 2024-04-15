import React from "react"
import {
  Button,
  Content,
  Hr,
  Section,
  Title,
  Wrapper,
} from "../../styles/portfolio/intro"

const Intro = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          프론트엔드 개발자
          <br />
          김태규
        </Title>
        <Hr />
        <Content>
          안녕하세요
          <br />
          배우는 것을 좋아하는 프론트엔드 개발자 입니다
          <br />
          새로운 것을 두려워하지 않고 도전하는 것이 저의 장점입니다
        </Content>
        <Button>About Me</Button>
      </Wrapper>
    </Section>
  )
}

export default Intro
