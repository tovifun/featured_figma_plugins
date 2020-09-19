import React,{useState} from 'react'
import '../theme/header.scss'

export default () => {
    let [scrolled, setState] = useState(false)
    console.log(scrolled, setState)
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll)
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll)
    // }

    // handleScroll = () => {
    //     const scrollTop = window.pageYOffset

    //     if (scrollTop > 50) {
    //         this.setState({ hasScrolled: true })

    //     } else {
    //         this.setState({ hasScrolled: false })
    //     }
    // }

    return <header className="header">
        <div className="header-group">
            <div className="header-logo">
                <a href="/">
                    <img height="28px" src={require('../images/tovifun_logo.png')} alt="logo" />
                    <img height="28px" src={require('../images/tovixjun.gif')} alt="logo" />
                </a>
            </div>
            <div className="header-nav">
                {/* <Link to="/">最新</Link> */}
                <a href="/#brooch">Figma 胸针</a>
                <a href="/#IdClassify">分类</a>
                {/* <Link to="/#IdArchive">归档</Link> */}
                <a href="/#IdAbout">关于</a>
                <a href="/#IdSubscribe">关注</a>
            </div>
        </div>
    </header>
}