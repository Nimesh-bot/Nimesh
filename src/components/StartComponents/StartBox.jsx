import React from 'react'
import styled from 'styled-components'
import Links from './Links'

const Container = styled.div`
    width: ${props => props.width};
    height: 60%;
    position: absolute;
    bottom: ${props => props.bottom};
    left: 50%;
    transform: translateX(-50%);
    border-top: 0.5px solid ${props => props.theme.background};
    border-left: 0.5px solid ${props => props.theme.background};
    border-right: 0.5px solid ${props => props.theme.background};
    border-radius: 8px 8px 0 0;
    
    background-color: ${props => props.theme.body}90;
    backdrop-filter: blur( 10px );
    -webkit-backdrop-filter: blur( 10px );
    box-shadow: ${props => props.theme.body} 0px 10px 50px;

    padding: 2rem 0.5rem;
    display: flex;
`

const StartBox = ({ bottom, width }) => {
  return (
    <Container bottom={bottom} width={width}>
      <Links />
    </Container>
  )
}

export default StartBox