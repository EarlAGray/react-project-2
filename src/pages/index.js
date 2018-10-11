import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-sketch.png')} width="50"  alt=""/> 
          <img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-figma.png')} width="50" /> 
          <img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-studio.png')} width="50" /> 
          <img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-framer.png')} width="50" /> 
          <img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-react.png')} width="50" /> 
          <img src={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-swift.png')} width="50" /> 
        </div>
        {/* shift + option + down to duplicate */}
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
        <div className="CardGroup">
        <Card
          title="Design System"
          text="10 sections"
          image={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/wallpaper.jpg')} />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/wallpaper.jpg')} />
        <Card
          title="AR Kit"
          text="10 sections"
          image={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/wallpaper.jpg')} />
        {/* use auto import to get it to import lines at the top */}
        </div>
    </div>
    <Section 
      image={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/wallpaper2.jpg')}
      logo={require('/Users/earl.a.gray/Documents/GitHub/react-project/public/images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

  </Layout>
)

export default IndexPage