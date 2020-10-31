import React, {useState} from 'react'
import styled from 'styled-components'
import { COLORS } from '../values/colors'
import Slider from './Slider'



// const AboutAuthor = styled.div`
//     display:flex;
//     align-items:center;
//     justify-content:center; 
//     margin:48px; 
// `

// const AboutAvatar = styled.img`
//     margin:8px;
//     height:64px;
//     @media (max-width:640px){
//         height:48px;
//     } 

// `
// const AboutX = styled.img`
//     margin:8px;
//     height:16px;

// `

const AboutSection = styled.div`
  padding: 64px 50px 50px 50px;
  background:${COLORS.bg_darker};
  @media (max-width:640px){
      padding: 64px 24px 20px;
    }
`

const AboutGroup = styled.div`
    max-width: 648px;
    line-height: 1.5;

    margin: 0 auto;
    position: relative;
    margin:0 auto;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    .AboutSlideText{
        cursor:pointer;
        text-decoration:underline;
        color:${COLORS.brand};
        font-weight:500;
        &:hover{
            opacity:.7;
        }
    }

    a{
        text-decoration:underline;
        color:${COLORS.brand};
    }

    a:hover{
        text-decoration:underline;
        color:${COLORS.brand};
        opacity:.7;
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

const AboutFigure = styled.figure`
    background-color: ${COLORS.bg_darker};
    margin: 0;
    padding: 4px;
    float: right;
    max-width: 280px;
    position: relative;
    right: -8em;
    margin-left: -7em;
    @media (max-width:880px){
        right: -6em;
        margin-left: -5em;
        max-width: 240px;
    }
    @media (max-width:820px){
        right: 0;
        margin-left: 12px;
        max-width: 220px;
    }
    @media (max-width:640px){
        right: 0;
        margin-left: 12px;
        max-width: 200px;
    }
    @media (max-width:480px){
        right: 0;
        margin-left: 12px;
        max-width: 140px;
    }
`
const AboutImage = styled.img`
    width: 100%;
    display: block;
    box-sizing:border-box;
    margin-bottom:.5em;
    cursor: pointer;
    border:2px solid ${COLORS.bg_darker};
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width:820px){
        width:100%;
    }
    @media (max-width:640px){
        width:100%;
    }
    &:hover{
        border:2px solid ${COLORS.brand};
        transform:scale(1.05);
`
const FigureCap = styled.figcaption`
    font-style: italic;
    font-size: .9em;
`

const FigureClear = styled.div`
clear:both;
`


// const AboutLikeTitle = styled.h3`
//     margin: 0;
//     padding: 0;
//     margin-top:56px;
//     margin-bottom:8px;
//     font-weight: 500;
//     font-size: 16px;
//     text-align:center;
//     color: ${COLORS.neutral_2};
//     clear:both;
//     line-height:1.6em;
//     span{
//         font-size:12px;
//     }
//     @media (max-width:640px){
//         font-size:15px;
//         line-height: 1.4em;
//     }
// `

// const AboutLikeUser = styled.ul`
// ${'' /* border: 2px solid ${COLORS.border_lighter}; */}
// display: -webkit-flex;
// display: -ms-flexbox;
// display: -moz-box;
// display: flex;
// -webkit-flex-wrap: wrap;
//     -ms-flex-wrap: wrap;
//         flex-wrap: wrap;
// justify-content:center;
// margin: 0;
// ${'' /* padding: 1em; */}
// list-style: none;
// a {
//     /* display: block; */
//     ${'' /* padding: 4px 12px; */}
//     ${'' /* background-color: ${COLORS.tag_bg}; */}
//     border-radius:50px;
//     line-height: 1.5;
//     text-decoration: underline;
//     color: ${COLORS.neutral_4};
//     position: relative;
//     text-align: center;
//     transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
// }
//     a:hover{
//         color: ${COLORS.brand};
//     }
// `

// const AboutLikeList = styled.li`
//     display: inline-block;
//     padding:6px 12px;
//     @media (max-width:640px){
//     padding:4px 8px;
// }
// `




const AboutAlt = () => {
    const [sliderShow, setState] = useState(false)
    const slideHandler = flag => {
        setState(flag)
    }
    return <AboutSection>
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

        <AboutHeadline>反馈</AboutHeadline>
        <AboutText>你可以在 <a href="https://www.notion.so/tovi/Featured-Figma-Plugins-59a87058a19441a495b7005fb72d1977" target="_blank" rel="noreferrer">这个 Notion 页面</a> 查看这个网站的更新记录和接下来想做的一些功能。</AboutText>
        <AboutText id="brooch">每个月的最后一天，我们会进行更新，你可以在下方关注公众号获得更新提醒。如果你想进行评论、反馈，可以 <a href="https://mp.weixin.qq.com/s/SqMktXLMPU-BRsAMPn7XOQ" target="_blank" rel="noreferrer">在这篇公众号</a> 或者 <a href="https://twitter.com/tovizhong/status/1285012648661184512" target="_blank" rel="noreferrer">这条推</a> 下留言（留言专用帖<span role="img" aria-label="Face with Tears of Joy">😂</span>）。</AboutText>
        

        <AboutHeadline>赞赏</AboutHeadline>

        <AboutText>
        如果你喜欢这个网站，请考虑给我赞赏。
        </AboutText>

        <AboutUl>
            <AboutList>通过 <a href="images/tovi_sponsor_wechat.jpg" target="_blank" rel="noreferrer">微信</a> 赞赏</AboutList>
            <AboutList>通过 <a href="images/tovi_sponsor_alipay.jpg" target="_blank" rel="noreferrer">支付宝</a> 赞赏</AboutList>
            {/*<AboutList>或通过  <a href="https://www.buymeacoffee.com/tovi" target="_blank" rel="noreferrer">Buy me a coffee</a></AboutList>*/}
        </AboutUl>

        <AboutHeadline>Figma 针织胸针</AboutHeadline>
        <AboutFigure>
            <AboutImage onClick={slideHandler.bind(null, true)} src="images/figma_craft.jpg" alt="Figma 手工针织胸针 ｜ 又一造物" />
            <FigureCap>将设计，拿在手，别在胸。</FigureCap>
        </AboutFigure>
        {'' /* <AboutText>将设计，拿在手，别在胸。</AboutText> */}
        <AboutText>这款由又一造物手工针织的 Figma 胸针，你可以将它别在你的外套，背包，帽子，牛仔裤，或者任何别的地方。</AboutText>
        <AboutText onClick={slideHandler.bind(null, true)} className="AboutSlideText">查看 Figma 针织胸针大图 →</AboutText>
        
        <AboutUl>
        <AboutList><strong><span role="img" aria-label=" ">🎁</span> 获得方式：</strong>如果你赞赏了 30 元，我们将给你邮寄胸针作为礼物。</AboutList>
        <AboutList><strong><span role="img" aria-label=" ">📅</span> 邮寄时间：</strong>每一个胸针都是手工钩编，我们一般是收到地址后的 <strong>7日内</strong> 制作和邮寄。（仅限国内）</AboutList>
        <AboutList><strong><span role="img" aria-label=" ">🏠</span> 收获信息：</strong>发送你的手机号和收件地址，至邮箱： hitovi@outlook.com；或者添加 Tovi 的微信号发送：twowei </AboutList>
        <AboutList><strong><span role="img" aria-label=" ">💌</span> 说明一下：</strong>手工制作难免有瑕疵，完美主义者请慎拍。</AboutList>
        </AboutUl>
        
        <AboutText><a href="https://www.notion.so/tovi/Figma-FAQ-ab99b69b82a247f89710a30a7fb021b8" target="_blank" rel="noreferrer">FAQ→</a></AboutText>
        {/*
        <AboutText>如果你赞赏了30元，我们将给你邮寄胸针作为礼物。</AboutText>
        <AboutText>因为胸针是手工钩编的，所以一般是在我们收到地址后的 <strong>7日内</strong> 制作和邮寄。</AboutText>
        <AboutText>发送你的手机号和收件地址即可获得。手机和地址可通过邮箱发送： hitovi@outlook.com，或者添加 Tovi 的微信号发送：twowei </AboutText>
        
        */}
        <FigureClear></FigureClear>
        <Slider show={sliderShow} hideSlide={slideHandler}></Slider>
        
        {/* <AboutUl>
            <AboutList>通过 <a href="images/tovi_sponsor_small.png" target="_blank" rel="noreferrer">微信或支付宝</a></AboutList>
            <AboutList>或通过  <a href="https://www.buymeacoffee.com/tovi" target="_blank" rel="noreferrer">Buy me a coffee</a></AboutList>
        </AboutUl> */}
        {/* <AboutText>赞赏任意金额，并发送邮件至： hitovi@outlook.com ， 写下你的<strong>昵称和一个社交/个人网站链接</strong>，我们将在下方展示你的昵称和链接信息。（随机排列）</AboutText> */}
        {/* <AboutText>注意：</AboutText>
        <AboutUl>
            <AboutFigure>
                <AboutImage src="images/figma_craft.jpg" alt="Figma 手工针织胸针 ｜ 又一造物" />
            </AboutFigure>
            <AboutList>赞赏任意金额，并发送邮件写下你的<strong>昵称和一个社交/个人网站链接</strong>，我们将在下方展示你的昵称和链接信息。（随机排列）</AboutList>

            <AboutList>赞赏30元，并发送邮件写下你的<strong>手机号和收件地址</strong>，我们将给你邮寄一个由 又一造物（也就是 Tovi 的老妹） 手工针织的 Figma 胸针，在这个页面可以查看 Figma 胸针大图。（仅限国内）</AboutList>
        </AboutUl> */}



        {/* <AboutLikeTitle> 感谢 5 位老铁赞赏<br /><span role="img" aria-label="heart"> ❤️ </span><span role="img" aria-label="heart"> ❤️ </span><span role="img" aria-label="heart"> ❤️ </span></AboutLikeTitle>
        <AboutLikeUser>
            <AboutLikeList><a href="https://dribbble.com/muchakucha" target="_blank" rel="noreferrer">Leo Lee</a></AboutLikeList>
            <AboutLikeList><a href="https://twitter.com/rosu_h" target="_blank" rel="noreferrer">Rosu</a></AboutLikeList>
            <AboutLikeList><a href="https://twitter.com/h_ymouse" target="_blank" rel="noreferrer">Ymouse</a></AboutLikeList>
            <AboutLikeList>泡面Online</AboutLikeList>
            <AboutLikeList>Sueway</AboutLikeList>
            <AboutLikeList><a href="images/tovi_sponsor_small.png" target="_blank" rel="noreferrer">You</a></AboutLikeList>
        </AboutLikeUser> */}

    </AboutGroup>
    </AboutSection>
}

export default AboutAlt