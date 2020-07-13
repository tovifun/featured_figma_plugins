import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
      link={[
        {
          rel: "apple-touch-icon", 
          size: "180x180",
          href: require('../images/apple-touch-icon.png')
        },
        {
          rel: "icon", 
          type: "image/png", 
          size: "16x16",
          href: require('../images/favicon-16x16.png')
        },
        {
          rel: "icon", 
          type: "image/png", 
          size: "32x32",
          href: require('../images/favicon-32x32.png')
        },
      ]}
    />
    <Header />
      {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }

  }
`
