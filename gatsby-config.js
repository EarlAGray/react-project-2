module.exports = {
  siteMetadata: {
    title: 'E.A. Gray\47s Portfolio',
    description: 'Portfolio of E.A. Gray, Service & Interaction Designer',
    keywords: 'portfolio, interaction designer, e.a. gray, earl gray, earl anthony gray, 2d animator, ux/ui designer, service & interaction designer, games, game designer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './images/gatsby-icon.png', // This path is relative to the root of the site. This is for storing websites on ios/android
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'enkomkxgbpyc',
        accessToken: '28b5c9d1c8e730a9d43bf03042915843f30526b161777966871c551088c9fccf',
      }
    },
    'gatsby-plugin-offline',
  ],
}
