import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.section`
    background-color: ${props => props.theme.body}
`

const Explorer = () => {
  return (
    <Container>
        <h1>H1</h1>
    </Container>
  )
}

export default Explorer