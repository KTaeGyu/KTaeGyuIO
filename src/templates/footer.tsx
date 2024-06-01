// import * as React from "react"
// import {
//   Facebook,
//   GitHub,
//   Instagram,
//   Twitch,
//   Twitter,
//   Youtube,
// } from "react-feather"

// const socialMedia = {
//   TWITTER: {
//     url: "https://twitter.com",
//     name: "Twitter",
//     icon: <Twitter />,
//   },
//   INSTAGRAM: {
//     url: "https://instagram.com",
//     name: "Instagram",
//     icon: <Instagram />,
//   },
//   FACEBOOK: {
//     url: "https://facebook.com",
//     name: "Facebook",
//     icon: <Facebook />,
//   },
//   YOUTUBE: {
//     url: "https://youtube.com",
//     name: "YouTube",
//     icon: <Youtube />,
//   },
//   GITHUB: {
//     url: "https://github.com",
//     name: "GitHub",
//     icon: <GitHub />,
//   },
//   TWITCH: {
//     url: "https://twitch.tv",
//     name: "Twitch",
//     icon: <Twitch />,
//   },
// }

// const getSocialURL = ({ service, username }) => {
//   const domain = socialMedia[service]?.url
//   if (!domain) return false
//   return `${domain}/${username}`
// }

// const getSocialIcon = ({ service }) => {
//   return socialMedia[service]?.icon
// }

// const getSocialName = ({ service }) => {
//   return socialMedia[service]?.name
// }

// interface FooterData {
//   layout: {
//     footer: {
//       id: string
//       meta: { id: string; href: string; text: string }[]
//       copyright: string
//       socialLinks: { id: string; service: string; username: string }[]
//     }
//   }
// }

// export default function Footer() {
//   // const data: FooterData = useStaticQuery(graphql`
//   //   query {
//   //     layout {
//   //       footer {
//   //         id
//   //         links {
//   //           id
//   //           href
//   //           text
//   //         }
//   //         meta {
//   //           id
//   //           href
//   //           text
//   //         }
//   //         copyright
//   //         socialLinks {
//   //           id
//   //           service
//   //           username
//   //         }
//   //       }
//   //     }
//   //   }
//   // `)

//   return <footer></footer>
// }
