import React from 'react'
import styled from 'styled-components'
import Layout from '../layouts'
import { COLORS } from '../values/colors'


const AboutGroup = styled.div`
    max-width: 636px;
    position: relative;
    margin:0 auto;
    padding:240px 0;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    a{
        text-decoration:underline;
    }
`

const AboutText = styled.div`
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 16px;
    color: ${COLORS.neutral_4};
    line-height:1.7em;
    margin-bottom:8px;
    @media (max-width:640px){
        font-size:15px;
        line-height: 1.85em;
    }
`

const NotFoundPage = () => (
  <Layout>
    <AboutGroup>
      <AboutText>404</AboutText>
    </AboutGroup>
  </Layout>
)

export default NotFoundPage
