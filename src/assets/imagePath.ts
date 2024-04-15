interface ImagePath {
  [key: string]: { default: string }
  // intro
  profile: { default: string }
  // skills
  python: { default: string }
  javascript: { default: string }
  typescript: { default: string }
  java: { default: string }
  react: { default: string }
  vue: { default: string }
  redux: { default: string }
  pinia: { default: string }
  zustand: { default: string }
  storybook: { default: string }
  styledcomponents: { default: string }
  emotion: { default: string }
  bootstrap: { default: string }
  rn: { default: string }
  django: { default: string }
  springboot: { default: string }
  express: { default: string }
  webrtc: { default: string }
  mysql: { default: string }
  sqlite: { default: string }
  github: { default: string }
  firebase: { default: string }
  jira: { default: string }
  notion: { default: string }
  // projects
  sample: { default: string }
}

const imagePath: ImagePath = {
  // intro
  profile: require("./images/profile.jpg"),
  // skills
  python: require("./images/python.webp"),
  javascript: require("./images/javascript.webp"),
  typescript: require("./images/typescript.webp"),
  java: require("./images/java.webp"),
  react: require("./images/react.webp"),
  rn: require("./images/rn.webp"),
  vue: require("./images/vue.webp"),
  redux: require("./images/redux.webp"),
  pinia: require("./images/pinia.webp"),
  zustand: require("./images/zustand.webp"),
  storybook: require("./images/storybook.webp"),
  styledcomponents: require("./images/styledcomponents.webp"),
  emotion: require("./images/emotion.webp"),
  bootstrap: require("./images/bootstrap.webp"),
  django: require("./images/django.webp"),
  springboot: require("./images/springboot.webp"),
  express: require("./images/express.webp"),
  webrtc: require("./images/web-rtc.webp"),
  mysql: require("./images/mysql.webp"),
  sqlite: require("./images/sqlite.webp"),
  github: require("./images/github.webp"),
  firebase: require("./images/firebase.webp"),
  jira: require("./images/jira.webp"),
  notion: require("./images/notion.webp"),
  // projects
  sample: require("./images/sample.png"),
}

export type { ImagePath }
export default imagePath
