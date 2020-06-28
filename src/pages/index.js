import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Cell from '../components/Cell'
import Section from '../components/Section'
import staticdata from '../../staticdata.json'
import styled from 'styled-components'

const SectionCaption = styled.p`
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  color: #130C31;
  max-width: 800px;
  padding: 10px 50px;

  @media (max-width:640px){
    padding: 10px 20px;
  }
`

const SectionCellGroup = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 30px 50px 50px 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 56px;
  justify-items: center;

  @media (max-width:1280px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width:900px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width:640px){
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    grid-gap: 28px 32px;
  }

  @media (max-width:540px){
      grid-template-columns: repeat(1, 1fr);
      padding: 20px;
      grid-gap: 28px 32px;
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1><span className="GradientText">Featured</span><br />Figma<br />Plugins.</h1>
        <p>This is a file created mainly to introduce some Figma plugins. 
    I have experienced almost all the <Link to="/page-2/">Subscribe</Link> Figma plugins a few days ago and wrote some notes for them (in Chinese).</p>
      </div>
    </div>
    <div className="Cards">
      <h2>Issue #4 <span className="CardDate">2020.06.19</span></h2>
      <div className="CardGroup">
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名国内知名国内知名国内知名国内知名国内知名国内知名国内知名国内知名国内知名国内知名国内知名国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
        <Card 
          title="React for Designers"
          author="Junnjn"
          text="国内知名 Figma 中文社区的作者（相信大家都知道的相信大家都知道的相信大家都知道的"
          tag="Handoff"
          image={require('../images_figma/bullets.png')}/>
      </div>

    </div>
    <button className="ButtonPre">
      查看往期推荐
    </button>

    <Section 
      logo={require('../images/tovifun_logo.png')}
      title="Tovi's Newsletter"
      text="This year, I'm focusing big-time on writing content for front-end developers. Expect rich, bite-sized tutorials along with "
      button="Subscribe"
    />
    
    <SectionCaption>Issue #4 - 2020.06.20</SectionCaption>

    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell
        title={cell.title}
        image={cell.image}
        author={cell.author}
        text={cell.text}
        tag={cell.tag}
         />
    ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
