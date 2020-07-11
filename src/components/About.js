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

const AboutQuote = styled.div`
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-size: 24px;
    color: ${COLORS.neutral_4};
    line-height:1.6em;
    margin-bottom:22px;
    @media (max-width:640px){
        font-size:20px;
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


const About = props => (
    <AboutGroup>
        <AboutTitle>关于这个项目</AboutTitle>
        <AboutText>合理地使用插件，能够极大地增加我们的工作效率。</AboutText>
        <AboutText>Figma 社区里，每天都会有许多插件更新，到今天，已经有快上千个插件了，未来肯定还会有更多的插件更新。有许多的插件成为了我的最爱，比如 Google Sheets Sync、 Themer、Design System Organizer 等等。</AboutText>
        <AboutText>官方的插件社区发现机制，目前只有 ‘Popular’ 这一项——即按照全部时间的热度排列。这虽然在最开始可以找到最优质的那部分插件，但是结果也导致了这些插件的长期 ‘霸榜’ ，新的优质插件，很难通过官方的社区来发掘。</AboutText>
        <AboutText>你会如何发掘优质插件？可能你会有一些群聊，里边的小伙伴会时常分享一些好的内容；或者你在社交账号也会浏览到一些插件推荐。
        </AboutText>
        <AboutText>再或者，你也可以像我一样，不想遗漏那些好的插件，使用非常笨的方法，每个月打开社区插件列表，把近期更新的插件都安装来玩一下。
        </AboutText>
        <AboutText>不过你完全不需要这么做，因为我已经体验过一遍了，并且挑选出了其中比较好的插件（就是这个网页中所展示的）。每个月挑选的数量也不会特别多，可能你花几分钟就浏览完了。
        </AboutText>
        <AboutTitle>关于这个网站</AboutTitle>
        <AboutText>
        这个网页的前身是一个 Figma Prototype，内容和这个网页差不多（你可以在我的 <a href="https://www.figma.com/@tovi" target="_blank">Figma 个人页里</a> 找到这个原型，这个网站的源文件也在里边）。不过因为每次更新都需要进行比较繁琐的工作，于是就想做成这个网页来展示，之前那个 Prototype 之后也不会更新了。</AboutText>
        <AboutText>
        每个月的最后一天，我会进行更新，你可以在下方订阅我的邮件通讯获得更新提醒。如果你想进行评论、反馈，可以 <a href="https://www.figma.com/@tovi" target="_blank">在这篇文章下留言</a>（留言专用帖😂）。</AboutText>
        
        <AboutTitle>接下来想做的</AboutTitle>
        <AboutText>
        因为开发能力实在有限，许多功能目前都实现不出来。事实上，这个网站是边看教程边做的，然后想要实现什么效果再去搜。所以，估计代码和性能都非常一般。等接下来如果有能力的话，有几个东西想实现的（也欢迎给我提建议！）：</AboutText>
        <AboutUl>
        <AboutList>内嵌的邮件订阅</AboutList>
        <AboutList>中英文内容切换</AboutList>
        <AboutList>暗黑模式</AboutList>
        </AboutUl>

        <AboutText>
        目前这个项目的大致情况就是如此，如果哪一天 Figma 社区的发现机制变得完善，这个项目就不需要进行下去了（笑。
        </AboutText>
        <AboutText>
        你居然阅读到了最后！非常感谢！这已经是对我是最大的支持了 😘
        </AboutText>

    </AboutGroup>
)

export default About