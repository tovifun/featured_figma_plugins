import React from 'react'
import styled from 'styled-components'
// import Layout from '../layouts'
import { COLORS } from '../values/colors'


// const AboutSection = styled.div`
//   padding: 64px 50px 50px 50px;
//   background:${COLORS.bg_darker};
//   @media (max-width:640px){
//       padding: 64px 24px 20px;
//     }
// `

const AboutGroup = styled.div`
    max-width: 648px;
    line-height: 1.5;
    margin: 0 auto;
    position: relative;
    margin:0 auto;
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
            <AboutTitleImage src={require('../images/tovifun_signature.gif')} alt="emo-bro"></AboutTitleImage>
            <AboutTitle>关于项目</AboutTitle>
        </AboutTitleGroup>
        {/* <AboutAuthor>
        <AboutAvatar src={require('../images/tovifun_avatar.png')} alt="tovi"></AboutAvatar>
        <AboutX src={require('../images/tovifun_x.png')} alt="tovi"></AboutX>
        <AboutAvatar src={require('../images/jun_avatar.png')} alt="jun"></AboutAvatar>
        </AboutAuthor> */}
        {/* <AboutHeadline>关于这个项目</AboutHeadline> */}
        <AboutText>Figma 社区里，每天都会有许多插件更新，到今天，已经有快上千个插件了，未来肯定还会有更多的插件更新。</AboutText>
        <AboutText>官方的插件社区发现机制，目前只有 ‘Popular’ 这一项——即按照全部时间的热度排列。这虽然在最开始可以找到最优质的那部分插件，但是结果也导致了这些插件的长期 ‘霸榜’ ，新的优质插件，很难通过官方的社区来发掘。</AboutText>
        <AboutText>你会如何发掘优质插件？可能你会有一些群聊，里边的小伙伴会时常分享一些好的内容；或者你在社交账号也会浏览到一些插件推荐。</AboutText>
        <AboutText>再或者，你也可以像我们一样，不想遗漏那些好的插件，使用非常笨的方法，每个月打开社区插件列表，把近期更新的插件都安装来玩一下。</AboutText>
        <AboutText>不过你完全不需要这么做，因为我们已经体验过一遍了，并且精心挑选出了其中比较好的插件（就是这个网页中所展示的）。每个月挑选的数量也不会特别多，可能你花几分钟就浏览完了。</AboutText>
    </AboutGroup>

)

export default Brooch
