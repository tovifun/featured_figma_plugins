import React from 'react'
import Layout from '../layouts'
import Cell from '../components/Cell'
import styled from 'styled-components'

const store = {}
for(let i=1; i<=6; i++){
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

const SectionCellGroup = styled.div`
max-width: 1320px;
margin: 0 auto;
padding: 80px 50px 10px 50px;
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

export default () => {
    let tag = String(decodeURIComponent(window.location.hash.slice(1))).trim()
    let cells = store[tag] || []
    window.scrollTo(0, 0)
    return (
    <Layout>
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
    </Layout>
    )
}