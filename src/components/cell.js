import React from 'react'
import styled from 'styled-components'


const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    ${'' /* first column will be 60px and the remaining space will be auto  */}
    grid-column-gap: 25px;
    ${'' /* doesn't have to be used, but can use rows and columns to set difference */}
    align-items: center;

`
const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background: #000000;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 60px;
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px 0;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell