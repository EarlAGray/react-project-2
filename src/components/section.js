import React from 'react'
import styled from 'styled-components'
import Wave from '../components/wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
    

    @media (max-width: 720px) {
        ${'' /* grid-template-rows: auto 100%; */}
        height: 820px;
    }

`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;

`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    color: #FFFFFF;
    font-size: 60px;
    margin: 0 auto;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
        line-height: 1.1;
    }
        
`

const SectionText = styled.p`
    color: #FFFFFF;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image ={props.image}>
        <WaveTop><Wave /></WaveTop>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
        <WaveBottom><Wave /></WaveBottom>
    </SectionGroup>
)
// img is background, src is for foreground
// Using styled CSS instead of creating a separate css file
export default Section