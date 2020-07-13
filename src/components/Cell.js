import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../values/colors'


const CellGroup = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    border-top: 2px solid ${COLORS.border};
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    &:hover{
        border-color: ${COLORS.brand};
        transform: translateY(-2px);
        cursor: pointer;
        h3{
        text-decoration:underline;
        color:${COLORS.brand};
    }
    }
`
const CellInfo = styled.div`

`
const CellLogo = styled.img`
    background: ${COLORS.image_default};
    width:36px;
    height: 36px;
    float: left;
    margin: 20px 12px 14px 0px;
    border-radius: 50%;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width:640px){
        margin-right:10px;
        width: 34px;
        height: 34px;
    }
`

const CellTitle = styled.h3`
    margin: 0;
    padding: 16px 0 0 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: ${COLORS.neutral_4};
    @media (max-width:640px){
        font-size:15px;
        ${'' /* padding-top:20px; */}
        line-height: 22px;
    }
`
const CellAuthor = styled.p`
    font-weight:normal;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    color: ${COLORS.neutral_2};
    @media (max-width:640px){
        font-size:13px;
        line-height: 18px;
    }
`
const CellText = styled.p`
    font-weight: 400;
    color: ${COLORS.neutral_4};
    margin: 0;
    padding: 12px 0 8px 0;
    line-height:1.5em;
    @media (max-width:640px){
        font-size:15px;
        line-height:1.55em;
    }
`
const CellTag = styled.p`
    font-weight: 500;
    color: ${COLORS.neutral_4};
    margin: 0;
    padding: 0px 0 16px 0;
    @media (max-width:640px){
        font-size:15px;
    }
`


const Cell = props => (
    <a href={props.link} width="100%" target="_blank">
    <CellGroup>
        <CellInfo>
            {/* <CellLogo src={require('../ffp/img/arc.png')}></CellLogo> */}
            <CellLogo src={props.image}></CellLogo>
            <CellTitle>{props.title}</CellTitle>
            <CellAuthor>{props.author}</CellAuthor>
        </CellInfo>
        <CellText>{props.text}</CellText>
        <CellTag>{props.tag}</CellTag>

    </CellGroup>
    </a>
)

export default Cell