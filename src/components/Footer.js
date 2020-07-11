import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { COLORS } from '../values/colors'

const FooterGroup = styled.div`
    margin: 0 auto;
    background:${COLORS.bg_darker};
    border-top:1px solid ${COLORS.border_lighter};
    z-index: 100;
    @media (max-width:640px){
        padding: 0 20px;
    }
`

const LinkGroup = styled.div`
    max-width: 360px;
    height:100px;
    margin:0 auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;

    a{
        color:${COLORS.neutral_4};
        font-size:16px;
        padding:8px;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    a:hover{
        color:${COLORS.brand};
    }
    @media (max-width:640px){

        a{
            font-size:14px;
        }
    }

`

const Footer = () =>(
        <FooterGroup>
        <LinkGroup>
        
          <Link to="/">首页</Link>
          <Link to="/about/">关于</Link>
          <Link to="/achieved">往期</Link>
          {/* <Link to="/courses">Workshop</Link> */}
          <Link to="/subscribe">订阅</Link>       
        </LinkGroup>
        </FooterGroup>
)

export default Footer
