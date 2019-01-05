import React from 'react'
import { Link } from 'gatsby'
// in JSX, you always need to use import from images unlike CSS, but use this for single images, use technique below for multiple
// would be  <Link to="/"><img src={logo} width="30" /></Link> and use below 
// import logo from '/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-designcode.svg'
import './header.css'


// const Header = ({ siteTitle }) => (
// got rid of this to turn static component into a stateful component !!
// )

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
  // setting initial state
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  // adding event listener

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    // console.log(window.pageYOffset); turn on to get value in console

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
       {/*? Asking if this state has changed, if so give the className of Header and HeaderScrolled, : if not, give className of "Header"  */}
        <div className="HeaderGroup">
          {/* <Link to="/"><img src={require('../../public/images/logo-portfolio.svg')} width="54" /></Link> */}
          <a href= "mailto: earlagray@gmail.com"><img src={require('../../public/images/logo-portfolio.svg')} width="54"/></a>
          <Link to="/courses">Link_1</Link>
          <Link to="/downloads">Link_2</Link>
          <Link to="/workshops">Link_3</Link>
          <Link to="/buy"><button>Contact Me</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
