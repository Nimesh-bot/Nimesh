import React, { useContext } from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './context/theme-context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Construction from './components/Construction'
import Taskbar from './components/Taskbar'
import Desktop from './screens/Desktop'
import Explorer from './screens/Explorer'
import Professional from './screens/Professional'
import Viewer from './screens/Viewer'
import BoardingScreen from './screens/BoardingScreen'
import Notebook from './components/NoteBookComponents/Notebook'
import { StateContext } from './context/state-context'

const Container = styledComponents.main`
  background-color: ${props => props.theme.body}  
  height: 100vh;
  overflow: hidden;
`

const App = () => {
  const { theme } = useContext(ThemeContext)
  const { notePadOpen } = useContext(StateContext)

  return (
    <ThemeProvider theme={theme}>
      <Container className="w-full font-poppins relative" onContextMenu={(e) => e.preventDefault()}>
        <Construction />
        {
          notePadOpen && <Notebook />
        }
        <Router>
          <Routes>
            <Route path='/' exact element={<BoardingScreen />}/>
            <Route path='/desktop' exact element={<Desktop />}/>
            <Route path='/explorer' element={<Explorer />}/>
            <Route path='/explorer/professional' element={<Professional />}/>
            <Route path='/viewer/:id' element={<Viewer />}/>
          </Routes>
          <Taskbar />
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App