import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { COLORS } from '../values/colors'

const ArchiveGroup = styled.div`
    max-width: 638px;
    position: relative;
    border-top: 1px solid ${COLORS.border};
    margin:0 auto;
    padding: 24px 0;
    transition: 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: baseline;
    &:hover{
        background:-webkit-linear-gradient(0deg, #F9F8F9 0%, rgba(249, 248, 249, 0) 100%);
        cursor: pointer;
    }
`
const ArchiveInfo = styled.div`
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: baseline;

`
const ArchiveTitle = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    color: ${COLORS.neutral_4};
`
const ArchiveTotal = styled.div`
    margin: 0;
    margin-left:8px;
    padding: 0px 6px;
    font-size: 14px;
    font-weight: normal;
    background: ${COLORS.tag_bg};
    line-height:18px;
    border-radius: 50px;
    border: 1px solid ${COLORS.tag_border};
    color: ${COLORS.neutral_4};
`
const ArchiveDate = styled.div`
    font-weight: 500;
    color: ${COLORS.neutral_2};
    margin: 0;
    font-size:16px;
`


const Archive = props => (
    <Link to={props.link}>
    <ArchiveGroup>
        <ArchiveInfo>
            <ArchiveTitle>{props.title}</ArchiveTitle>
            <ArchiveTotal>{props.total}</ArchiveTotal>
        </ArchiveInfo>
        <ArchiveDate>{props.date}</ArchiveDate>
    </ArchiveGroup>
    </Link>
)

export default Archive