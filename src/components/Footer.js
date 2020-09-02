import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../values/colors'

const FooterGroup = styled.div`
    border-top:1px solid ${COLORS.border_lighter};
    background:${COLORS.bg_darker};
    z-index: 100;
    @media (max-width:640px){
        padding: 0 20px;
    }
`
const FooterContent = styled.div`
    max-width:648px;
    margin: 0px auto; 
    padding-top:48px; 
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: flex;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    justify-content:center;
    flex-direction: column;


`
const FooterText = styled.div`
    line-height: 120px;
    height: 120px;
    text-align: center;
    font-size:16px;
    color:${COLORS.neutral_3};
    font-weith:normal;
    margin-top:48px;
    a{
        color:${COLORS.neutral_3};
        font-size:16px;
        padding:2px;
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

const FooterTitleGroup = styled.div`
text-align: center;
`
const FooterTitleImage = styled.img`
    ${'' /* margin:8px; */}
    ${'' /* background-color:${COLORS.image_default}; */}
    height:96px;
    width:96px;
    @media (max-width:640px){
        height:80px;
    } 
`
const FooterTitle = styled.h2`
    margin-bottom:16px;
`
const FooterContributorGroup = styled.div`
display: flex;
justify-content:center;
`
const FooterContributor = styled.div`
    padding:12px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    color:${COLORS.neutral_3};
    @media (max-width:640px){
        padding:8px;
    } 
    &:hover{
        transform:scale(1.1);
        color:${COLORS.brand};

        img{
            border:2px solid ${COLORS.brand}; 
        }
    }
`
const FooterContributorAvatar = styled.img`
    display: inline-block;
    margin:8px;
    width:64px;
    height:64px;
    box-sizing: border-box;
    border-radius:400px;
    background-color:${COLORS.image_default};
    @media (max-width:640px){
        height:48px;
    } 
    ${'' /* &:hover{
        border:2px solid ${COLORS.brand};
    } */}
    

`
const FooterContributorName = styled.p`
    display: inline-block;
    text-align: center;
    
    font-size:14px;
    font-weight:500;
`


const Footer = () =>(
    <FooterGroup>
        <FooterContent>
        <FooterTitleGroup>
            <FooterTitleImage src={require('../images/emo-bro.gif')} alt="Phone Call Sticker by jecamartinez -> http://www.instagram.com/jecamartinezart"></FooterTitleImage>
            <FooterTitle>项目参与者</FooterTitle>
        </FooterTitleGroup>
        <FooterContributorGroup>
            <a href="https://www.figma.com/@tovi" target="_blank" rel="noreferrer" >
            <FooterContributor>
                <FooterContributorAvatar src={require('../images/tovifun_avatar.png')} alt="tovi"></FooterContributorAvatar>
                <FooterContributorName>Tovi</FooterContributorName>
            </FooterContributor>
            </a>
            <a href="http://github.com/rudyhub" target="_blank" rel="noreferrer" >
            <FooterContributor>
                <FooterContributorAvatar src={require('../images/avatar_rudy.png')} alt="rudy"></FooterContributorAvatar>
                <FooterContributorName>Rudy</FooterContributorName>
            </FooterContributor>
            </a>
            <a href="https://juuun.io" target="_blank" rel="noreferrer" >
            <FooterContributor>
                <FooterContributorAvatar src={require('../images/jun_avatar.png')} alt="jun"></FooterContributorAvatar>
                <FooterContributorName>Jun</FooterContributorName>
            </FooterContributor>
            </a>
        </FooterContributorGroup>
        <FooterText>
        A <a href="https://www.figma.com/@tovi" target="_blank" rel="noreferrer" >Tovi</a> Project
        </FooterText>
        </FooterContent>
    </FooterGroup>
)

export default Footer
