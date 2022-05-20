import React from 'react'
import { ThemeContext } from './context/theme-context'
import { ThemeProvider } from 'styled-components'
import Taskbar from './components/Taskbar'
import Desktop from './screens/Desktop'
import styledComponents from 'styled-components'

const Container = styledComponents.main`
  background-color: ${props => props.theme.body};
`

const App = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <Container className='w-full h-screen font-poppins relative'>
            <Desktop />
            <Taskbar />
      </Container>
    </ThemeProvider>
  )
}

export default App