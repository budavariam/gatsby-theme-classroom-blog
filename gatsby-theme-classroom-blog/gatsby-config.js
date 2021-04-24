module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    }
  ],
  pathPrefix: `/`,
  // Customize your site metadata:
  siteMetadata: {
    title: `Title`,
    author: `Your Name`,
    description: `Site description`,
    hasSlides: true,
    hasCourseInfo: true,
    hasCheatsheet: true,
    siteUrl: "https://example.com",
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/username`,
      // },
      // {
      //   name: `github`,
      //   url: `https://github.com/username`,
      // },
    ],
  },
}
