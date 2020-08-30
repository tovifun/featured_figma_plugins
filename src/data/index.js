//将所有数据整合到store里，方便全局使用
const store = {
    tags: {},
    date: {}
}
for(let i=1; i<=7; i++){
    const issue = require(`./issue${i}.json`)
    for(let cell of issue.cells){
        if(!cell) continue
        let tag = String(cell.tag).trim()
        let tagGroup = store.tags[tag]
        if(!tagGroup) {
            tagGroup = []
            store.tags[tag] = tagGroup
        }
        if(tagGroup.indexOf(cell) === -1) tagGroup.push(cell)
    }
    if(issue.date) store.date[issue.date] = issue.cells
}

export default store