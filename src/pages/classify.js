import React from 'react'
import Layout from '../layouts'
import Cell from '../components/Cell'
import styled from 'styled-components'
import Subscribe from '../components/Subscribe'

const store = {}
for(let i=1; i<=13; i++){
    const issue = require(`../data/issue${i}.json`)
    for(let cell of issue.cells){
        if(!cell) continue
        let tag = String(cell.tag).trim()
        let tagGroup = store[tag]
        if(!tagGroup) {
            tagGroup = []
            store[tag] = tagGroup
        }
        if(tagGroup.indexOf(cell) === -1) tagGroup.push(cell)
    }
    if(issue.date) store[issue.date] = issue.cells
}

const SectionTitle = styled.h2`
    margin-top:24px;
    text-align:center;
    margin-bottom:24px;
`

const SectionBlank = styled.div`
    height:104px;

`

const SectionCellGroup = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    padding: 20px 50px 20px 50px;
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
    padding: 12px 24px 12px 24px;
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
export default ({location}) => {
    let tag = String(decodeURIComponent(location.hash.slice(1))).trim()
    let cells = store[tag] || []
    if(typeof(window) !== 'undefined') window.scrollTo(0, 0)
    return (
    <Layout>
        <SectionBlank></SectionBlank>
        <SectionTitle>{tag}</SectionTitle>
        <SectionCellGroup>
            {
                cells.map((cell, index) => (
                    <Cell
                        title={cell.title}
                        image={cell.image}
                        author={cell.author}
                        text={cell.text}
                        tag={cell.tag}
                        link={cell.link}
                        key={index}
                    />
                    ))
            }
        </SectionCellGroup>
        <SectionBlank></SectionBlank>
        <Subscribe></Subscribe>
    </Layout>
    )
}