// support for .env, .env.development, and .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://ktaegyuio.netlify.app/",
    title: "KTaeGyuIO",
    author: `KTaeGyu`,
    description: "Portfolio site of KTeaGyu. With Gatsby & Contentful.",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: [
          "CONTENTFUL_SPACE_ID",
          "CONTENTFUL_ACCESS_TOKEN",
          "CONTENTFUL_MANAGEMENT_TOKEN",
          "CONTENTFUL_DELIVERY_ACCESS_TOKEN",
          "CONTENTFUL_HOST",
          "CONTENTFUL_ENVIRONMENT",
          "NETLIFY_AUTH_TOKEN",
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-svgr",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "KTeaGyu's Portfolio",
        short_name: "KTaeGyuIO",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        icon: "src/favicon.png",
      },
    },
  ],
}
