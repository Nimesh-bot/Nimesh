import React, { useContext } from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './context/theme-context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Construction from './components/Construction'
import Desktop from './screens/Desktop'
import Explorer from './screens/Explorer'
import Taskbar from './components/Taskbar'

const Container = styledComponents.main`
  background-color: ${props => props.theme.body}  
`

const App = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <ThemeProvider theme={theme}>
      <Container className="w-full h-screen font-poppins relative">
        <Construction />
        <Router>
          <Routes>
            <Route path='/' exact element={<Desktop />}/>
            <Route path='/explorer' element={<Explorer />}/>
          </Routes>
          <Taskbar />
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App