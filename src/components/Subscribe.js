import React from 'react'
import styled from 'styled-components'
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
        font-size:1.02em;
    }
`

const Subscribe = () =>(
        <FooterGroup>
        <SubscribeGroup>
            <Stamp width='120' height='120' src={require('../images/tovifun_stamp.png')}></Stamp>

            <Title>订阅一下，获得更新通知</Title>
            <Text>关注 <a href="/" target="_blank">我的公众号</a>，或者订阅 <a href="https://www.getrevue.co/profile/tovi" target="_blank">邮件通讯</a> ，获取 Figma 插件和我的博客文章更新提醒。</Text>
            {/* <Button><Link to="/subscribe">去订阅</Link></Button> */}
        </SubscribeGroup>
        
        </FooterGroup>
)

export default Subscribe
