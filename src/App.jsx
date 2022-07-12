import React, { useContext, useEffect } from 'react'
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
import StartBox from './components/StartComponents/StartBox'
import Settings from './screens/Settings'
import UniversalStyle from './assets/UniversalStyle'
import { themes } from './context/Themes'

const Container = styledComponents.main`
  background-color: ${props => props.theme.body}  
  height: 100vh;
  overflow: hidden;
`

const App = () => {
  const { theme, setWallpaper, setTheme } = useContext(ThemeContext)
  const { notePadOpen, start } = useContext(StateContext)

  useEffect(() => {
    if (localStorage.getItem('wallpaper') !== null) {
      setWallpaper(localStorage.getItem('wallpaper'))
    }
  })
  useEffect(() => {
    if (localStorage.getItem('theme') !== null) {
      if(localStorage.getItem('theme') === 'calm') {
        setTheme(themes.calm)
      }
      else if(localStorage.getItem('theme') === 'heal') {
        setTheme(themes.heal)
      }
      else{
        setTheme(themes.neon)
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <UniversalStyle />
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
            <Route path='/setting' element={<Settings />}/>
          </Routes>
          {
            start ? <StartBox bottom='3rem' width='35%' /> : <StartBox bottom="-38rem" width="5%" />
          }
          <Taskbar />
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App