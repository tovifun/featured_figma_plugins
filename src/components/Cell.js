import React from 'react'
import styled from 'styled-components'



const CellGroup = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    border-top: 2px solid #E0E0E9;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
`
const CellInfo = styled.div`
`
const CellImage = styled.div`
    background: black;
    background-image:url(${props => props.image});
    background-size:36px;
    float: left;
    margin: 24px 12px 14px 0px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
`
const CellTitle = styled.div`
    margin: 0;
    padding: 20px 0 0 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #130C31;
`
const CellAuthor = styled.div`
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    color: #B2ABBB;
`
const CellText = styled.div`
    font-weight: 500;
    color: #534E66;
    margin: 0;
    padding: 12px 0 8px 0;
`
const CellTag = styled.div`
    font-weight: 500;
    color: #534E66;
    margin: 0;
    padding: 0px 0 16px 0;
`


const Cell = props => (
    <CellGroup>
        <CellInfo>
            <CellImage image={props.image}></CellImage>
            <CellTitle>{props.title}</CellTitle>
            <CellAuthor>{props.author}</CellAuthor>
        </CellInfo>
        <CellText>{props.text}</CellText>
        <CellTag>{props.tag}</CellTag>

    </CellGroup>
)

export default Cell