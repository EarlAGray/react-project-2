import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/card'
import Section from '../components/section'
import Wave from '../components/wave'
import Cell from '../components/cell'
import staticdata from '../../staticdata.json'
import styled from 'styled-components';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
  margin: 0 auto;
`

const SectionCellGroup = styled.div`
  max-width: 900px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1,1fr);
    padding: 0 15px;
  }
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>E.A. Gray <br /> Currently under construction</h1>
        <p>Thanks to DesignCode.io, I am currently building this website using ReactJS.</p>
        <Link to="/page-2/">Watch the video</Link>
        <div className="Logos">
          <img src={require('../../public/images/logo-sketch.png')} width="50"  alt=""/> 
          <img src={require('../../public/images/logo-figma.png')} width="50" /> 
          <img src={require('../../public/images/logo-studio.png')} width="50" /> 
          <img src={require('../../public/images/logo-framer.png')} width="50" /> 
          <img src={require('../../public/images/logo-react.png')} width="50" /> 
          <img src={require('../../public/images/logo-swift.png')} width="50" /> 
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
          image={require('../../public/images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../../public/images/wallpaper.jpg')} />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require('../../public/images/wallpaper.jpg')} />
        <Card
          title="AR Kit"
          text="10 sections"
          image={require('../../public/images/wallpaper.jpg')} />
        {/* use auto import to get it to import lines at the top */}
        </div>
    </div>
    <Section 
      image={require('../../public/images/wallpaper2.jpg')}
      logo={require('../../public/images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell =>(
        <Cell 
          title={cell.title}
          image={cell.image} /> 
      ))}
    </SectionCellGroup>

  </Layout>
)

export default IndexPage