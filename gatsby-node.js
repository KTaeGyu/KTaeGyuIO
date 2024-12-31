const path = require("path")
const PROJECTS = require("./modules/projects.js")
const SKILLS = require("./modules/skills.js")

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      allContentfulAuthor {
        nodes {
          contentful_id
          name
          username
          posted {
            id
            title
            imgPath
          }
        }
      }
      allContentfulPost {
        nodes {
          id
          title
          description {
            description
          }
          reader {
            nickname
          }
          author {
            nickname
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }
  // 치치 작성자 페이지
  const authors = result.data.allContentfulAuthor.nodes

  authors.forEach((author) => {
    actions.createPage({
      path: `/chichi/${author.username}`,
      component: path.resolve(`src/templates/chichi/author.tsx`),
      context: {
        contentful_id: author.contentful_id,
        name: author.name,
        username: author.username,
        posted: author.posted || [],
      },
    })
  })
  // 치치 포스트 페이지
  const posts = result.data.allContentfulPost.nodes

  posts.forEach((post) => {
    actions.createPage({
      path: `/chichi/post/${post.id}`,
      component: path.resolve(`src/templates/chichi/post.tsx`),
      context: {
        title: post.title,
        description: post.description,
        reader: post.reader,
        author: post.author,
      },
    })
  })

  // 프로젝트 페이지
  PROJECTS.forEach((project) => {
    actions.createPage({
      path: `/src/pages/${project.title}/page`,
      component: path.resolve("src/templates/src/pages/project-name.tsx"),
      context: project,
    })
  })
  // 스킬 페이지
  SKILLS.forEach((skill) => {
    actions.createPage({
      path: `/src/assets/icons/${skill.title}.svg`,
      component: path.resolve("src/templates/src/assets/icons/skill-name.tsx"),
      context: skill,
    })
  })
}
