import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../values/colors'


const AboutGroup = styled.div`
    max-width: 636px;
    position: relative;
    margin:0 auto;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    a{
        text-decoration:underline;
    }
`

const AboutAuthor = styled.div`
    display:flex;
    align-items:center;
    justify-content:center; 
    margin:48px; 

`

const AboutAvatar = styled.img`
    margin:8px;
    height:64px;
    @media (max-width:640px){
        height:48px;
    } 

`
const AboutX = styled.img`
    margin:8px;
    height:16px;

`

const AboutTitle = styled.h2`
    margin: 0;
    padding: 0;
    margin-top:32px;
    margin-bottom:8px;
    font-weight: 600;
    font-size: 20px;
    color: ${COLORS.neutral_4};
    line-height:1.6em;
    @media (max-width:640px){
        font-size:15px;
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
`

const About = () => (
    <AboutGroup>
        <AboutAuthor>
        <AboutAvatar src={require('../images/tovifun_avatar.png')} alt="tovi"></AboutAvatar>
        <AboutX src={require('../images/tovifun_x.png')} alt="tovi"></AboutX>
        <AboutAvatar src={require('../images/jun_avatar.png')} alt="jun"></AboutAvatar>
        </AboutAuthor>
        <AboutTitle>关于这个项目</AboutTitle>
        {/* <AboutText>合理地使用插件，能够极大地增加我们的工作效率。</AboutText> */}
        <AboutText>Figma 社区里，每天都会有许多插件更新，到今天，已经有快上千个插件了，未来肯定还会有更多的插件更新。</AboutText>
        <AboutText>官方的插件社区发现机制，目前只有 ‘Popular’ 这一项——即按照全部时间的热度排列。这虽然在最开始可以找到最优质的那部分插件，但是结果也导致了这些插件的长期 ‘霸榜’ ，新的优质插件，很难通过官方的社区来发掘。</AboutText>
        <AboutText>你会如何发掘优质插件？可能你会有一些群聊，里边的小伙伴会时常分享一些好的内容；或者你在社交账号也会浏览到一些插件推荐。</AboutText>
        <AboutText>再或者，你也可以像我们一样，不想遗漏那些好的插件，使用非常笨的方法，每个月打开社区插件列表，把近期更新的插件都安装来玩一下。</AboutText>
        <AboutText>不过你完全不需要这么做，因为我们已经体验过一遍了，并且精心挑选出了其中比较好的插件（就是这个网页中所展示的）。每个月挑选的数量也不会特别多，可能你花几分钟就浏览完了。</AboutText>
        <AboutTitle>关于这个网站</AboutTitle>
        <AboutText>这个网页的前身是一个 Figma Prototype，内容和这个网页差不多（你可以在 Tovi 的 <a href="https://www.figma.com/@tovi" target="_blank" rel="noreferrer">Figma 个人页里</a> 找到这个原型）。不过因为这个原型每次更新都需要进行比较繁琐的工作，于是就想做成这个网页来展示，之前那个 Prototype 之后也不会更新了。</AboutText>
        <AboutText>每个月的最后一天，我们会进行更新，你可以在下方关注公众号获得更新提醒。如果你想进行评论、反馈，可以 <a href="https://mp.weixin.qq.com/s/SqMktXLMPU-BRsAMPn7XOQ" target="_blank" rel="noreferrer">在这篇公众号</a> 或者 <a href="https://twitter.com/tovizhong/status/1285012648661184512" target="_blank" rel="noreferrer">这条推</a> 下留言（留言专用帖<span role="img" aria-label="Face with Tears of Joy">😂</span>）。</AboutText>
        
        <AboutTitle>接下来想做的</AboutTitle>
        <AboutText>接下有几个东西想实现的（也欢迎给我们提建议！）：</AboutText>
        <AboutUl>
        <AboutList>内嵌的邮件订阅</AboutList>
        <AboutList>中英文内容切换</AboutList>
        <AboutList>暗黑模式</AboutList>
        </AboutUl>
        <AboutText>
        目前这个项目的大致情况就是如此，如果哪一天 Figma 社区的发现机制变得完善，这个项目就不需要进行下去了（笑。
        </AboutText>
        <AboutTitle>感谢</AboutTitle>
        <AboutText>非常感谢你阅读到了最后！这已经是对我们是最大的支持了<span role="img" aria-label="love">😘</span></AboutText>

    </AboutGroup>
)

export default About