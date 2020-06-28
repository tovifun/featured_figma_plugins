import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    background: #130C31;
    margin:50px auto;
    max-width: 720px;
    padding: 24px 32px 32px 32px;
    display:grid;
    grid-template-columns: auto 120px;
    grid-gap:32px;

    @media (max-width: 640px){
        grid-template-columns: auto 0;
        grid-gap:0;
    }
`

const SectionSide = styled.div`

`

const SectionTitle = styled.h3`
    margin:0;
    color:white;
    font-weight: 500;
    font-size: 32px;
    line-height: 45px;
`

const SectionText = styled.p`
    margin:4px 0 32px 0;
    color:white;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`

const SectionButton = styled.div`
    margin:0;
    width:128px;
    color: #ECBF2C;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 8px 18px;
    border: 2px solid #ECBF2C;
    box-sizing: border-box;
    text-align:center;
`

const SectionLogo = styled.img`
    width:120px;
    @media (max-width: 640px){
        display:none;
    } 
`



const Section = props =>(
    <SectionGroup>
        <SectionSide>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
            <SectionButton>{props.button}</SectionButton>
        </SectionSide>
        <SectionLogo src={props.logo} />
    </SectionGroup>
)

export default Section