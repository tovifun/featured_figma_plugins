import React from 'react'
import Layout from '../layouts'
import store from '../data'
import About from '../components/About'

const dates = Object.keys(store.date)
const tags = Object.keys(store.tags)
dates.sort((a,b) => {
  return new Date(b) - new Date(a)
})
const dateLen = dates.length

export default () => {
    return <Layout>
        <div className="hero">
            <div className="hero-group">
                <h1><span className="hero-text">Featured</span><br />Figma<br />Plugins.</h1>
                <p>每月的最后一天，给你推荐当月更新的、值得尝试的 Figma 插件。<br />下一次推送时间：9月30日。可以关注公众号获得更新提醒。</p>
            </div>
        </div>
        <div className="caption">
            <div className="caption-title">Issue #{dates.length}</div>
            <div className="caption-date">{dates[0]}</div>
        </div>
        <div className="cell">
            {store.date[dates[0]].map((cell, index) => (
                <a className="cell-item" href={cell.link} width="100%" target="_blank" rel="noreferrer" key={index}>
                    <div className="cell-info">
                        <img className="cell-logo" src={cell.image} alt={cell.title}/>
                        <h3 className="cell-title">{cell.title}</h3>
                        <p className="cell-author">{cell.author}</p>
                    </div>
                    <p className="cell-text">{cell.text}</p>
                    <p className="cell-tag">{cell.tag}</p>
                </a>
            ))}
        </div>
        <div className="classify">
            <h2 className="classify-title">按分类查找</h2>
            <div className="classify-tags">
                {tags.map(tag => (<a className="classify-tag" href={`/classify#${tag}`} key={tag}>
                    #{tag} <span>{store.tags[tag] && store.tags[tag].length}</span>
                </a>))}
            </div>
            <h2 id="IdArchive" className="classify-title">查看往期</h2>
            {dates.map((date, index) => (
                <a className="classify-archive" href={`/classify#${date}`} key={index}>
                    <div className="classify-archive-info">
                        <h3 className="classify-archive-title">{`Issue #${dateLen - index}`}</h3>
                        <div className="classify-archive-total">{store.date[date].length}</div>
                    </div>
                    <div className="classify-archive-date">{date}</div>
                </a>
            ))}
        </div>
        <About></About>
    </Layout>
}
{/* <Archive
title={`Issue #${dateLen - index}`}
date={date}
link={`/classify#${date}`}
total={store.date[date].length}
key={index}/> */}
/*
import React, { useState }from 'react'
import Layout from '../layouts'
import styled from 'styled-components'
import Cell from '../components/Cell'
import Classify from '../components/Classify'
import Subscribe from '../components/Subscribe'
import store from '../data'
import { COLORS } from '../values/colors'
import AboutAlt from '../components/AboutAlt'

let dates = Object.keys(store.date)
dates.sort((a,b) => {
  return new Date(b) - new Date(a)
})

const SectionCaption = styled.div`
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.neutral_4};
  max-width: 648px;
  padding: 58px 50px 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: baseline;
  @media (max-width:640px){
    padding: 58px 24px 10px;
  }
`

const CaptionTitle = styled.p`
  margin:0;
`

const CaptionDate = styled.p`
  margin:0;
  margin-left: 12px;
  color: ${COLORS.neutral_2};
  font-weight:500;
`

const SectionCellGroup = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 20px 50px 10px 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px 56px;
  justify-items: center;

  @media(max-width:1640px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width:1280px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width:900px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:640px){
    grid-template-columns: repeat(2, 1fr);
    padding: 12px 24px 8px 24px;
    grid-gap: 28px 32px;
  }

  @media (max-width:540px){
      grid-template-columns: repeat(1, 1fr);
      padding: 12px 24px 8px 24px;
      grid-gap: 28px 32px;
  }

  a{
    width:100%;
  }
`

const SectionClassify = styled.div`
  margin:0 auto;
  max-width: 648px;
  padding: 50px 50px 100px;
  @media (max-width:640px){
      padding: 50px 24px;
    }
`

const SectionAbout = styled.div`
    index:100;

`

const SectionSubscribe = styled.div`
  index:-1;
`

const IndexPage = () => {
  const [theme, setState] = useState('default')
  return (<Layout className={`${theme}-layout`} onChangeTheme={setState}>
    <div className={`Hero ${theme}-Hero`}>
      <div className="HeroGroup">
        <h1><span className={`GradientText ${theme}-GradientText`}>Featured</span><br />Figma<br />Plugins.</h1>
        <p>每月的最后一天，给你推荐当月更新的、值得尝试的 Figma 插件。<br />下一次推送时间：9月30日。可以关注公众号获得更新提醒。</p>
      </div>
    </div>

    <SectionCaption>
      <CaptionTitle>Issue #{dates.length}</CaptionTitle>
      <CaptionDate>{dates[0]}</CaptionDate>
    </SectionCaption>

    <SectionCellGroup>
    {store.date[dates[0]].map((cell, index) => (
      <Cell
        title={cell.title}
        image={cell.image}
        author={cell.author}
        text={cell.text}
        tag={cell.tag}
        link={cell.link}
        key={index}
      />
    ))}
    </SectionCellGroup>

    <SectionClassify id="IdClassify">
      <Classify></Classify>
    </SectionClassify>

    <SectionAbout id="IdAbout">
      <AboutAlt></AboutAlt>
    </SectionAbout>

    <SectionSubscribe id="IdSubscribe">
      <Subscribe></Subscribe>
    </SectionSubscribe>
  </Layout>)
}

export default IndexPage
*/