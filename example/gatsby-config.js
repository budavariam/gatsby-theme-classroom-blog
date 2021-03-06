module.exports = {
  plugins: [
    { resolve: `gatsby-theme-classroom-blog`, options: {} },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingIds: [
    //       ""
    //     ],
    //   },
    // },
  ],
  pathPrefix: `/gatsby-theme-classroom-blog`,
  // Customize your site metadata:
  siteMetadata: {
    title: `Example Site`,
    author: `Budavári Mátyás`,
    hasSlides: true,
    hasCourseInfo: true,
    hasCheatsheet: true,
    description: `Lesson agenda, slides, homework assignments`,
    language: "en",
    siteUrl: "https://budavariam.github.io/gatsby-theme-classroom-blog",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/budavari`,
      },
      {
        name: `github`,
        url: `https://github.com/budavariam`,
      },
    ],
  },
}
