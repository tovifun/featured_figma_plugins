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
      <div className={this.state.hasScrolled ? 
      'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <div className="HeaderLogo">
          <Link to="/"><img height="28px" src={require('../images/tovifun_logo.png')}  /><img height="28px" src={require('../images/tovifun_wordmark.gif')}  /></Link>
        </div>
        <div className="HeaderButton"> 
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/courses">Workshop</Link>
          <Link to="/courses">Subscribe</Link>        
        </div>
      </div>
      </div>  
    )
  }
}

export default Header
