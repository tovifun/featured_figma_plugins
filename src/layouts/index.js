import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import '../theme/global.css'
import '../theme/default.css'
import '../theme/dark.css'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children, onChangeTheme, className}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )
  return (
    <div className={`layout ${className}`}>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          { name: 'description', content: site.siteMetadata.description },
          { name: 'keywords', content: site.siteMetadata.keywords },
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
      <Header onChangeTheme={onChangeTheme}/>
        {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
