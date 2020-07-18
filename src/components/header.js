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
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) =>{
    const scrollTop = window.pageYOffset

    if (scrollTop > 50){
      this.setState({hasScrolled:true})

    } else {
      this.setState({hasScrolled:false})
    }
  }

  render(){
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <div className="HeaderLogo">
            <Link to="/">
              <img height="28px" src={require('../images/tovifun_logo.png')} alt="logo"/>
              <img height="28px" src={require('../images/tovifun_wordmark.gif')} alt="logo"/>
            </Link>
          </div>
          <div className="HeaderButton"> 
            <Link to="/">最新</Link>
            <Link to="/#IdArchive">往期</Link>
            <Link to="/#IdAbout">关于</Link>
            <Link to="/#IdSubscribe">订阅</Link>        
          </div>
        </div>
      </div>  
    )
  }
}

export default Header
