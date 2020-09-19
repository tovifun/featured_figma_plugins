import React from 'react'
import '../theme/about.scss'

export default () => {
    return <div className="about">
        <div className="about-group">
            <img className="about-title-img" src={require('../images/tovifun_signature.gif')} alt="emo-bro"/>
            <h2 className="about-title-text">关于项目</h2>

            <p>Figma 社区里，每天都会有许多插件更新，到今天，已经有快上千个插件了，未来肯定还会有更多的插件更新。</p>
            <p>官方的插件社区发现机制，目前只有 ‘Popular’ 这一项——即按照全部时间的热度排列。这虽然在最开始可以找到最优质的那部分插件，但是结果也导致了这些插件的长期 ‘霸榜’ ，新的优质插件，很难通过官方的社区来发掘。</p>
            <p>你会如何发掘优质插件？可能你会有一些群聊，里边的小伙伴会时常分享一些好的内容；或者你在社交账号也会浏览到一些插件推荐。</p>
            <p>再或者，你也可以像我们一样，不想遗漏那些好的插件，使用非常笨的方法，每个月打开社区插件列表，把近期更新的插件都安装来玩一下。</p>
            <p>不过你完全不需要这么做，因为我们已经体验过一遍了，并且精心挑选出了其中比较好的插件（就是这个网页中所展示的）。每个月挑选的数量也不会特别多，可能你花几分钟就浏览完了。</p>

            <h3>反馈</h3>
            <p>你可以在 <a href="https://www.notion.so/tovi/Featured-Figma-Plugins-59a87058a19441a495b7005fb72d1977" target="_blank" rel="noreferrer">这个 Notion 页面</a> 查看这个网站的更新记录和接下来想做的一些功能。</p>
            <p>每个月的最后一天，我们会进行更新，你可以在下方关注公众号获得更新提醒。如果你想进行评论、反馈，可以 <a href="https://mp.weixin.qq.com/s/SqMktXLMPU-BRsAMPn7XOQ" target="_blank" rel="noreferrer">在这篇公众号</a> 或者 <a href="https://twitter.com/tovizhong/status/1285012648661184512" target="_blank" rel="noreferrer">这条推</a> 下留言（留言专用帖<span role="img" aria-label="Face with Tears of Joy">😂</span>）。</p>

            <h3>赞赏</h3>
            <p>如果你喜欢这个网站，请考虑给我赞赏。</p>

            <ul id="brooch">
                <li>通过 <a href="images/tovi_sponsor_small.png" target="_blank" rel="noreferrer">微信或支付宝</a></li>
                <li>或通过  <a href="https://www.buymeacoffee.com/tovi" target="_blank" rel="noreferrer">Buy me a coffee</a></li>
            </ul>

            <h3>Figma 针织胸针</h3>

            <figure>
                <img src="images/figma_craft.jpg" alt="Figma 手工针织胸针 ｜ 又一造物" />
            </figure>
        
            <p>如果你赞赏了30元，我们将给你邮寄一个由<strong>又一造物</strong>手工针织的 Figma 胸针。</p>
            <p>发送你的<strong>手机号和收件地址</strong>即可获得。</p>
            <p>可通过邮箱发送： hitovi@outlook.com，或者添加 Tovi 的微信号发送：twowei </p>
            <p><a href="./brooch" rel="noreferrer">查看 Figma 针织胸针大图 →</a></p>
            <div className="clear"></div>
        </div>
    </div>
}