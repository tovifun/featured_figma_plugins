import React from 'react'
import Cell from '../components/Cell'
import issue4 from '../data/issue4.json'
import Archive from '../components/Archive'
import issues from '../data/issues.json'
import styled from 'styled-components'
import Subscribe from '../components/Subscribe'
import { COLORS } from '../values/colors'

const SectionBread = styled.div`
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  color: #130C31;
  max-width: 636px;
  padding: 160px 50px 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: baseline;
  @media (max-width:640px){
    padding: 100px 24px 10px;
  }
`

const BreadHome = styled.p`
  margin:0;
`

const BreadCurrent = styled.p`
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
  
  a{
    width:100%;
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
`

const SectionArchive = styled.div`
  padding: 80px 50px 80px 50px;
  @media (max-width:640px){
      padding: 70px 24px 70px;
    }
`

const SectionSubscribe = styled.div`
`

const SubscribePage = () => (
  <div>

    <SectionBread>
      <BreadHome>Issue #4</BreadHome>
      <BreadCurrent>2020.04-25</BreadCurrent>
    </SectionBread>

    <SectionCellGroup>
    {issue4.cells.map(cell => (
      <Cell
        title={cell.title}
        image={cell.image}
        author={cell.author}
        text={cell.text}
        tag={cell.tag}
        link={cell.link}
         />
    ))}
    </SectionCellGroup>

    <SectionArchive>
      {issues.issue.map(issue =>(
        <Archive
          title={issue.title}
          date={issue.date}
          link={issue.link}
          total={issue.total}
        />
      ))}
    </SectionArchive>


    <SectionSubscribe>
      <Subscribe></Subscribe>
    </SectionSubscribe>

  </div>
)

export default SubscribePage
