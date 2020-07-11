import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import LogoImage from '../images/tovifun_qrcode.png'
import { COLORS } from '../values/colors'

const FooterGroup = styled.div`
    margin: 0 auto;
`

const SubscribeGroup= styled.div`
    position:relative;
    padding:96px 48px 80px;
    background:${COLORS.bg_darker};
    border-top:1px solid ${COLORS.border_lighter};
    @media (max-width:640px){
        padding: 64px 48px 48px;
    }

`

const Stamp = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom:24px;
  opacity: 0.7;
`

const Logo = styled.div`
    background-image: url(${LogoImage});
    background-size:160px;
    width:160px;
    height:186px;
    margin:8px auto 16px auto;
    @media (max-width:640px){
        background-size:120px;
        width:120px;
        height:136px;
    }
`

const Title = styled.p`
    text-align:center;
    font-weight: 600;
    font-size: 28px;
    color:${COLORS.neutral_4};
    margin:8px auto;
    @media (max-width:640px){
        font-size: 24px;
    }    
`

const Text = styled.p`
    text-align:center;
    font-weight: normal;
    line-height:1.5em;
    font-size: 16px;
    max-width:480px;
    color:${COLORS.neutral_3};
    margin:0px auto;
    
    @media (max-width:640px){
        font-size: 15px;
        max-width:320px;
    }
    a{  
        text-decoration:underline;
        transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    a:hover{
        font-size:1.01em;
    }
`


// const Button = styled.button`
//     display:block;
//     font-weight: 600;
//     font-size: 18px;
//     width: 115px;
//     margin:0 auto;
//     padding: 12px 20px;
//     color: #FFF;
//     background: rgba(255, 255, 255, 0);
//     color: #8C00F9;
//     background: -webkit-linear-gradient(195.2deg, #8C00F9 -12.61%, #FF04D8 113.05%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     border:none;
//     outline:none;
//     cursor:pointer;
//     border-radius: 4px;
//     transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
//     position: relative;
    
//     &:hover{
//         background: -webkit-linear-gradient(195.2deg, #FF00F5 -12.61%, #FFA620 113.05%);
//         -webkit-background-clip: text;
//         -webkit-text-fill-color: transparent;
//     }

// `


const Subscribe = ({data}) =>(
        <FooterGroup>
        <SubscribeGroup>
            <Stamp width='120' src={require('../images/tovifun_stamp.png')}></Stamp>
            {/* <Logo></Logo> */}
            <Title>订阅</Title>
            <Text>关注 <a href="/" target="_blank">我的公众号</a>，或者订阅 <a href="https://tovifun.substack.com/about" target="_blank">邮件通讯</a> ，获取 Figma 插件和我的博客文章更新提醒。</Text>
            {/* <Button><Link to="/subscribe">去订阅</Link></Button> */}
        </SubscribeGroup>
        
        </FooterGroup>
)

export default Subscribe
