import React from 'react'
import { Link } from 'gatsby'
// in JSX, you always need to use import from images unlike CSS, but use this for single images, use technique below for multiple
// would be  <Link to="/"><img src={logo} width="30" /></Link> and use below 
// import logo from '/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-designcode.svg'
import './header.css'


const Header = ({ siteTitle }) => (
  <div className="Header"> 
    <div className="HeaderGroup">
      <Link to="/"><img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
