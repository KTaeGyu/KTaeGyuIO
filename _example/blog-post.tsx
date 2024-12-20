// import { GatsbyImage } from "gatsby-plugin-image"
// import * as React from "react"
// import SEOHead from "../components/head"
// import * as styles from "./blog-post.css"
// import {
//   Avatar,
//   Box,
//   Container,
//   Flex,
//   Heading,
//   HomepageImage,
//   Space,
//   Text,
// } from "./ui"
// import { avatar as avatarStyle } from "./ui.css"

// export interface BlogAuthor {
//   id: string
//   name: string
//   avatar: HomepageImage
// }

// export interface BlogPost {
//   id: string
//   slug: string
//   title: string
//   excerpt: string
//   category: string
//   date: string
//   html: string
//   image: HomepageImage
//   author: BlogAuthor
//   next?: BlogPost
//   previous?: BlogPost
// }

// export default function BlogPost(props: BlogPost) {
//   return (
//     <>
//       <Container>
//         <Box paddingY={5}>
//           <Heading as="h1" center>
//             {props.title}
//           </Heading>
//           <Space size={4} />
//           {props.author && (
//             <Box center>
//               <Flex>
//                 {props.author.avatar &&
//                   (!!props.author.avatar.gatsbyImageData ? (
//                     <Avatar
//                       {...props.author.avatar}
//                       image={props.author.avatar.gatsbyImageData}
//                     />
//                   ) : (
//                     <img
//                       src={props.author.avatar.url}
//                       alt={props.author.name}
//                       className={avatarStyle}
//                     />
//                   ))}
//                 <Text variant="bold">{props.author.name}</Text>
//               </Flex>
//             </Box>
//           )}
//           <Space size={4} />
//           <Text center>{props.date}</Text>
//           <Space size={4} />
//           {props.image && (
//             <GatsbyImage
//               alt={props.image.alt}
//               image={props.image.gatsbyImageData}
//             />
//           )}
//           <Space size={5} />
//           <div
//             className={styles.blogPost}
//             dangerouslySetInnerHTML={{
//               __html: props.html,
//             }}
//           />
//         </Box>
//       </Container>
//     </>
//   )
// }
// export const Head = (props: BlogPost) => {
//   return <SEOHead {...props} description={props.excerpt} />
// }
