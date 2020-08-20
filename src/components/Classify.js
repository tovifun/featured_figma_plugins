import React from 'react'
import Link from 'gatsby-link'
import store from '../data'
import Archive from './Archive'

const tags = Object.keys(store.tags)
const dates = Object.keys(store.date)

//排序日期，倒序
dates.sort((a, b) => {
    return new Date(b) - new Date(a)
})

const dateLen = dates.length

const tagStyle = {margin: '.5em', padding: '.2em .5em', border: '1px solid', display: 'inline-block', borderRadius: '6px'}

const Classify = () => (
    <div>
        <hr></hr>
        <h2>分类 - 标签</h2>
        {tags.map(tag => (<Link to={`/classify#${tag}`} key={tag} style={tagStyle}>#{tag}</Link>))}
        <h2 id="IdArchive" style={{paddingTop: '60px'}}>分类 - 日期</h2>
        {dates.map((date, index) => (
            <Archive
            title={`Issue #${dateLen - index}`}
            date={date}
            link={`/classify#${date}`}
            total={store.date[date].length}
            key={index}/>
        ))}
        <hr></hr>
    </div>
)

export default Classify