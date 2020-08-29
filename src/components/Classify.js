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

const Classify = () => (
    <div>
        <h2 className="classify-title">按分类查找</h2>
        <div className="classify-tags">
            {tags.map(tag => (<Link className="classify-tag" to={`/classify#${tag}`} key={tag}>
                #{tag} <span>{store.tags[tag] && store.tags[tag].length}</span>
            </Link>))}
        </div>
        <h2 id="IdArchive" className="classify-title">查看往期</h2>
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