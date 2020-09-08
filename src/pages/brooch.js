import React from 'react'
import styled from 'styled-components'
// import Layout from '../layouts'
import { COLORS } from '../values/colors'



const AboutGroup = styled.div`
    max-width: 648px;
    line-height: 1.5;
    margin: 0 auto;
    position: relative;
    margin:0 auto;
   padding: 64px 50px 50px 50px;
   @media (max-width:640px){
       padding: 64px 24px 20px;
     }
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    a{
        text-decoration:underline;
        color:${COLORS.brand};
    }
`

const AboutTitleGroup = styled.div`
    text-align: center;
    margin-bottom:48px;
`

const AboutTitleImage = styled.img`
    ${'' /* margin:8px; */}
    height:96px;
    width:96px;
    @media (max-width:640px){
        height:80px;
        width:80px;
    } 
`

const AboutTitle = styled.h2`
    font-size: 24px;
`


const AboutHeadline = styled.h2`
    margin: 0;
    padding: 0;
    margin-top:36px;
    margin-bottom:8px;
    font-weight: 600;
    font-size: 20px;
    color: ${COLORS.neutral_4};
    line-height:1.6em;
    @media (max-width:640px){
        font-size:18px;
        line-height: 1.4em;
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

const AboutUl = styled.ul`
    font-size: 16px;
    color: ${COLORS.neutral_4};
    line-height:1.7em;
    margin:8px 0;
    padding-left:28px;
    margin-bottom:12px;
    @media (max-width:640px){
        font-size:15px;
        line-height: 1.85em;
    }
`

const AboutList = styled.li`
    list-style-type: square;
    margin:4px 0;
`

const Brooch = () => (

    <AboutGroup>
        <AboutTitleGroup>
            <AboutTitleImage src={require('../images/tovifun_avatar.png')} alt="emo-bro"></AboutTitleImage>
            <AboutTitle>关于项目</AboutTitle>
        </AboutTitleGroup>
        <AboutText>
            Figma 社区里，每天都会有许多插件更新，到今天，已经有快上千个插件了，未来肯定还会有更多的插件更新。
        </AboutText>
    </AboutGroup>

)

export default Brooch
