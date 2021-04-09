const path = require('path');

module.exports = {
  siteMetadata: {
    title: "sports-crm.github.io",
    siteUrl: "https://sports-crm.github.io"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: path.resolve(__dirname, './blog/')
      },
    },
    {
      resolve: 'gatsby-plugin-blogpost',
      options: {
        sourceInstanceName: 'blog',
        blogPostTemplate: path.resolve(__dirname, './src/blog/blog-post.tsx'),
        blogListTemplate: path.resolve(__dirname, './src/blog/blog-list.tsx')
      }
    }
  ],
};
