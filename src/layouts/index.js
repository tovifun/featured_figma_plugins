import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({children}) => {
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
    return <div className="layout">
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
        <Header></Header>
        {children}
        <Footer></Footer>
    </div>
}