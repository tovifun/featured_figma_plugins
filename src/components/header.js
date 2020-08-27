import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      hasScrolled:false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) =>{
    const scrollTop = window.pageYOffset

    if (scrollTop > 50){
      this.setState({hasScrolled:true})

    } else {
      this.setState({hasScrolled:false})
    }
  }

  onChangeTheme(e){
    if(typeof this.props.onChangeTheme === 'function') this.props.onChangeTheme(e.target.value)
  }

  render(){
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <div className="HeaderLogo">
            <Link to="/">
              <img height="28px" src={require('../images/tovifun_logo.png')} alt="logo"/>
              <img height="28px" src={require('../images/tovixjun.gif')} alt="logo"/>
            </Link>
          </div>
          <div className="HeaderButton">
            {/* <Link to="/">最新</Link> */}
            <Link to="/#IdClassify">分类</Link>
            <Link to="/#IdArchive">归档</Link>
            <Link to="/#IdAbout">关于</Link>
            <Link to="/#IdSubscribe">关注</Link>
            {/* <select onInput={this.onChangeTheme.bind(this)}>
              <option value="default">浅色</option>
              <option value="dark">暗黑</option>
            </select>     */}
          </div>
        </div>
      </div>  
    )
  }
}

export default Header
