import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <div>
    <div classname="Hero">
      <div classname="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src='/images/logo-sketch.png' width="50" />
          <img src='/images/logo-figma.png' width="50" />
          <img src='/images/logo-studio.png' width="50" />
          <img src='/images/logo-framer.png' width="50" />
          <img src='/images/logo-react.png' width="50" />
          <img src='/images/logo-swift.png' width="50" />
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage