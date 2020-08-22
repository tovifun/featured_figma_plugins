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

const tagStyle = {margin: '.6em', padding: '.4em .8em', background:'rgba(25, 13, 58, 0.06)', border: 'none', display: 'inline-block', borderRadius: '2px', color:'rgba(4, 0, 20, 0.7)'}

const Classify = () => (
    <div>

        <h2 style={{paddingTop: '64px', marginBottom:'18px', textAlign:'center'}}>按分类查找</h2>
        {tags.map(tag => (<Link to={`/classify#${tag}`} key={tag} style={tagStyle}>#{tag}</Link>))}
        <h2 id="IdArchive" style={{paddingTop: '64px', marginBottom:'24px', textAlign:'center'}}>查看往期</h2>
        {dates.map((date, index) => (
            <Archive
            title={`Issue #${dateLen - index}`}
            date={date}
            link={`/classify#${date}`}
            total={store.date[date].length}
            key={index}/>
        ))}
    </div>
)

export default Classify