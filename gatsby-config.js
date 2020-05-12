const config = require('./data/siteConfig')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    ...config,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/data/intl`,
        languages: [`en`, `es`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: config.pathPrefix,
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: config.display,
        icon: "static/icon.svg", // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId,
      },
    },
  ],
}
