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
    'gatsby-plugin-react-helmet'
  ],

}


