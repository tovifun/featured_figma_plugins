module.exports = {
  siteMetadata: {
    title: 'Featured Figma Plugins - tovi.fun',
    description:'Tovi Personal website. Design, Figma and more.',
    keywords:'Tovi, React, Figma, Design, Artical, UI, designer, Blog, Persoanl Website'
  },
  plugins: [
    // `gatsby-transformer-json`,
    // {
    //     resolve:`gatsby-source-filesystem`,
    //     options: {
    //       path:`${__dirname}/data/`
    //     },
    // },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId:'rkcb3q2drjt7',
    //     accessToken:
    //     '2DRUWVu3fr5lfUffb9O_S5DMbMvmMI9A1vIsTSGtx5s'
    //   }
    // }
  ],

}


