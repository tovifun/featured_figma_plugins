import React from 'react'
import Layout from '../layouts'
import styled from 'styled-components'
import Cell from '../components/Cell'
import Archive from '../components/Archive'
import About from '../components/About'
import Subscribe from '../components/Subscribe'
import issues from '../data/issues.json'
import issue5 from '../data/issue5.json'
import { COLORS } from '../values/colors'

const SectionCaption = styled.div`
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  color: ${COLORS.neutral_4};
  max-width: 636px;
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
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px 50px 10px 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px 56px;
  justify-items: center;
  

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

const SectionArchive = styled.div`
  padding: 80px 50px 80px 50px;
  @media (max-width:640px){
      padding: 70px 24px 70px;
    }
`
const SectionAbout = styled.div`
  padding: 100px 50px 100px 50px;
  background:#F7F3FA;
  @media (max-width:640px){
      padding: 64px 24px 64px;
    }
`

const SectionSubscribe = styled.div`
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1><span className="GradientText">Featured</span><br />Figma<br />Plugins.</h1>
        <p>每月的最后一天，给你推荐当月更新的、值得尝试的 Figma 插件。可以关注公众号，或者订阅邮件通讯获得更新提醒。</p>
      </div>
    </div>

    <SectionCaption>
      <CaptionTitle>Issue #5</CaptionTitle>
      <CaptionDate>2020.06.20</CaptionDate>
    </SectionCaption>

    <SectionCellGroup>
    {issue5.cells.map((cell, index) => (
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

    <SectionArchive id="IdArchive">
      {issues.issue.map((issue, index) =>(
        <Archive
          title={issue.title}
          date={issue.date}
          link={issue.link}
          total={issue.total}
          key={index}
        />
      ))}
    </SectionArchive>

    <SectionAbout id="IdAbout">
      <About></About>
    </SectionAbout>

    <SectionSubscribe id="IdSubscribe">
      <Subscribe></Subscribe>
    </SectionSubscribe>
  </Layout>
)

export default IndexPage
