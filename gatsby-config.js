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
        ],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
        name: "Gatsby Starter Contentful Homepage",
        short_name: "Gatsby",
        start_url: "/",
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
  ],
}
