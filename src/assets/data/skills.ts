import imagePath from "../imagePath"
import { lang_level, level, skill_level } from "./level"

interface url {
  title: string
  link: string
}

interface skill {
  id: number
  field_title: string
  logo: string
  title: string
  experience: string
  level: level
  urls?: url[]
}

let skill_id = 0

const skills: skill[] = [
  {
    id: skill_id++,
    field_title: "언어",
    logo: imagePath.python.default,
    title: "Python",
    experience:
      "직관적이라는 언어 특성상 평소 알고리즘 문제를 풀거나 알고리즘 관련 고민을 할 때 주로 사용하는 언어입니다. 또한 대량의 데이터 처리 능력과 데이터 분석에 용이한 NumPy, Pands, Matplotlib 등 라이브러리를 지원하기 때문에, 영화 추천 웹 프로젝트(KHMovie)에서 백엔드 언어로 채택하여 사용해 보았습니다.",
    level: lang_level[4],
  },
  {
    id: skill_id++,
    field_title: "언어",
    logo: imagePath.javascript.default,
    title: "Javascript",
    experience:
      "대부분의 브라우저에서 JS엔진을 지원하므로 그동안 진행한 모든 FE 프로젝트에서 JS를 활용하였습니다. 여러 웹 프로젝트를 진행하면서 Caroucel, Modal, Togle, Drag 등 기능에 대해 라이브러리를 이용 해본 뒤 직접 구현하며 해당 알고리즘에 대한 고민을 해 볼 수 있었습니다. 특히 개발자를 위한 공부 관리 웹(Wondoo)을 구현하는 과정에서 공부 내용을 피드로 작성하는 과정에서 여러 유형의 데이터를 저장, 불러오기 하는 과정에 자료 유형에 대한 고민을 해볼 수 있었습니다.",
    level: lang_level[3],
  },
  {
    id: skill_id++,
    field_title: "언어",
    logo: imagePath.typescript.default,
    title: "Typescript",
    experience:
      "JS를 이용하여 영화 목록 CRUD 연습 프로젝트(Solo-Movie)를 진행하던 중 JS의 특징 중 하나인 동적 타입 결정 때문에 디버깅에 애를 먹은 경험이 있습니다. 이 경험을 토대로 프로젝트의 규모가 커질수록 TS의 중요성이 부각될 것이라고 생각하여 이후 프로젝트에는 TS를 적용하였습니다. 실제로 TS를 적용한 후의 프로젝트는 디버깅에 걸리는 시간이 현저히 줄어들었습니다. 다만, TS를 처음 적용했을 때에는 타입을 직접 선언하고 설정해 주어야 하는 작업에 많은 애를 먹었습니다. 이후 NodeJS 를 익혀 이와 같은 작업에도 능숙해져야 할 필요성을 느껴 학습중에 있습니다.",
    level: lang_level[3],
  },
  {
    id: skill_id++,
    field_title: "언어",
    logo: imagePath.java.default,
    title: "Java",
    experience:
      "국내에서 가장 많이 사용되는 백엔드 프레임워크인 Spring의 기반언어인 Java를 공부해 보았습니다. Java 언어의 장단점과 기초 문법, 객체 지향 언어로써의 특징에 대해 공부하였고, 이를 응용해 보기 위해 간단한 웹 쇼핑몰 프로젝트(DaSanDa)에서 Spring으로 아이템 관련 CRUD API를 만들어 보았습니다. 이 과정에서 SpringBoot와 JPA를 이용해 보았습니다. ",
    level: lang_level[1],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.react.default,
    title: "ReactJS",
    experience:
      "제가 가장 많이 사용해본 프레임워크로, 개발자를 위한 공부 관리 웹(Wondoo)을 유지보수하는 과정에서 코드 수정을 통해 성능개선을 해본 경험이 있습니다. 웹의 메인 화면에서 사용자들의 공부한 내용을 피드 형식으로 받아오는 화면이 있는데, 최초 데이터를 모두 받아오는 형식에서 React API 중 하나인 IntersectionObserver를 활용하여 사용자가 스크롤을 내리는 것을 인식하여 로딩하도록 하였습니다. 또한 검색 결과 요청 시 최초 onChange 인식을 통해 요청 보내는 방식에서, Lodash 라이브러리의 debounce 함수를 사용하여 사용자의 입력이 끝났을 때 결과를 요청하도록 하여 네트워크 통신양을 줄일 수 있었습니다.",
    level: skill_level[4],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.vue.default,
    title: "VueJS",
    experience:
      "개발자를 위한 공부 관리 웹 프로젝트(Wondoo) 구현에서 상태 관리를 위해 사용해본 경험이 있습니다. 프로젝트 규모를 고려하여 컴포넌트 트리 리랜더링 가능성이 있는 context API 대신 상태관리 도구를 이용하였습니다. 관리하는 상태와 함수의 수가 많았기 때문에 가독성과 유지보수를 고려하여 Atomic model 의 상태관리 라이브러리 보다 State 와 Reducer 를 모아 관리하는 Redux를 채택하였습니다. 프로젝트에서는 Redux 상태를 localStorage에 관리하는 방식으로 구현하였습니다. 이후 코드리뷰 중 각 상태별로 세션 혹은 쿠키에 저장해야 하거나 저장하지 말아야 할 데이터가 있다는 것을 파악했습니다. 따라서 각 리듀서에 설정을 다르게 적용하여 통합 리듀서를 만드는 방식으로 리팩토링을 계획하였습니다.",
    level: skill_level[3],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.redux.default,
    title: "Redux",
    experience:
      "개발자를 위한 공부 관리 웹 프로젝트(Wondoo) 구현에서 상태 관리를 위한 도구로써 사용해본 경험이 있습니다. 프로젝트 규모가 어느정도 컸기 때문에 React 내장 함수인 context API 는 context 를 포함하는 트리를 리랜더링하는 경우가 발생하는 경우가 생길 수 있기 때문에 배제하였습니다. 또한 클라이언트 상태 뿐 아니라 재사용되는 서버 상태 또한 Redux를 통해 관리하였고, 공부 내용을 기록하는 페이지의 클라이언트 상태가 많은 리듀서와 상태를 포함하고 있었기 때문에 Atomic 한 상태 관리 도구보단 State 와 Reducer 를 모아 관리하는 Redux 가 가독성과 유지보수 측면에서 유리할 것이라고 생각하였습니다. 프로젝트 진행 중 모든 상태를 localStorage 에서 관리하는 방식으로 구현하였습니다. 그러나 구현이 끝난 후 코드리뷰 중 서버와 통신에서 토큰이나 사용자 정보를 송수신할 때 쿠키를 이용하면 편리하다는 것을 알게 되었습니다. 또한 스토리지에 피드 정보와 같이 localStorage 에 저장하지 말아야 할 정보나 세션에 저장할 정보또한 있었기 때문에 각 리듀서를 나누어 configuration 을 설정해주는 방식으로 리팩토링을 계획하였습니다.",
    level: skill_level[4],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.pinia.default,
    title: "Pinia",
    experience: "",
    level: skill_level[3],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.zustand.default,
    title: "Zustand",
    experience: "",
    level: skill_level[0],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.storybook.default,
    title: "Storybook",
    experience: "",
    level: skill_level[1],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.styledcomponents.default,
    title: "Styled-Compoents",
    experience: "",
    level: skill_level[3],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.emotion.default,
    title: "Emotion",
    experience: "",
    level: skill_level[3],
  },
  {
    id: skill_id++,
    field_title: "프론트엔드",
    logo: imagePath.bootstrap.default,
    title: "Bootstrap",
    experience: "",
    level: skill_level[3],
  },
  {
    id: skill_id++,
    field_title: "모바일",
    logo: imagePath.rn.default,
    title: "React-native",
    experience: "",
    level: skill_level[3],
  },
  {
    id: skill_id++,
    field_title: "백엔드",
    logo: imagePath.django.default,
    title: "Django",
    experience: "",
    level: skill_level[2],
  },
  {
    id: skill_id++,
    field_title: "백엔드",
    logo: imagePath.springboot.default,
    title: "SpringBoot",
    experience: "",
    level: skill_level[2],
  },
  {
    id: skill_id++,
    field_title: "백엔드",
    logo: imagePath.express.default,
    title: "ExpressJS",
    experience: "",
    level: skill_level[1],
  },
  {
    id: skill_id++,
    field_title: "백엔드",
    logo: imagePath.webrtc.default,
    title: "WebRTC",
    experience: "",
    level: skill_level[2],
  },
  {
    id: skill_id++,
    field_title: "데이터베이스",
    logo: imagePath.mysql.default,
    title: "MySQL",
    experience: "",
    level: skill_level[0],
  },
  {
    id: skill_id++,
    field_title: "데이터베이스",
    logo: imagePath.sqlite.default,
    title: "SQLite",
    experience: "",
    level: skill_level[1],
  },
  {
    id: skill_id++,
    field_title: "데브옵스/인프라",
    logo: imagePath.github.default,
    title: "Github",
    experience: "",
    level: skill_level[1],
  },
  {
    id: skill_id++,
    field_title: "데브옵스/인프라",
    logo: imagePath.firebase.default,
    title: "Firebase",
    experience: "",
    level: skill_level[1],
  },
  {
    id: skill_id++,
    field_title: "협업 툴",
    logo: imagePath.jira.default,
    title: "Jira",
    experience: "",
    level: skill_level[1],
  },
  {
    id: skill_id++,
    field_title: "협업 툴",
    logo: imagePath.notion.default,
    title: "Notion",
    experience: "",
    level: skill_level[1],
  },
]

export type { skill }
export default skills
