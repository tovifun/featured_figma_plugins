import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../values/colors'

const FooterGroup = styled.div`
    margin: 0 auto;
    border-top:1px solid ${COLORS.border_lighter};
    background:${COLORS.bg_darker};
    z-index: 100;
    @media (max-width:640px){
        padding: 0 20px;
    }
`

const FooterText = styled.div`
    line-height: 120px;
    height: 120px;
    text-align: center;
    font-size:16px;
    color:${COLORS.neutral_3};
    font-weith:normal;
    a{
        color:${COLORS.neutral_3};
        font-size:16px;
        padding:8px;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        text-decoration: underline;
    }
    a:hover{
        color:${COLORS.brand};
    }
    @media (max-width:640px){
        line-height: 80px;
        height: 80px;
        font-size:15px;
        a{
            font-size:15px;
        }
    }

`

const Footer = () =>(
        <FooterGroup>
        <FooterText>
        Designed & Developed by<a href="http://tovi.fun/" target="_blank">Tovi</a>&<a href="https://juuun.io/" target="_blank">Juuun</a>    
        </FooterText>
        </FooterGroup>
)

export default Footer
