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
import BoardingScreen from './screens/BoardingScreen'
import Notebook from './components/NoteBookComponents/Notebook'
import { StateContext } from './context/state-context'
import StartBox from './components/StartComponents/StartBox'
import Settings from './screens/Settings'
import UniversalStyle from './assets/UniversalStyle'
import { themes } from './context/Themes'
import HireForm from './components/HireMeComponents/HireForm'
import PersonalApi from './screens/PersonalApi'
import Browser from './screens/Browser'
import ProjectViewer from './screens/ProjectViewer'
import DesignViewer from './screens/DesignViewer'

const Container = styledComponents.main`
  background-color: ${props => props.theme.body}  
  height: 100vh;
  overflow: hidden;
`

const App = () => {
  const { theme, setWallpaper, setTheme } = useContext(ThemeContext)
  const { notePadOpen, start, hireOpen, setStart } = useContext(StateContext)

  //set the browser to full screen on load
  const fullscreen = () => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen()
    }
  }

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
      <Container className="w-full font-poppins relative" onContextMenu={(e) => e.preventDefault()} onClick={() => start && setStart(false)}>
        <Construction />
        {
          notePadOpen && <Notebook />
        }
        {
          hireOpen && <HireForm />
        }
        <Router>
          <Routes>
            <Route path='/' exact element={<BoardingScreen click={fullscreen}/>}/>
            <Route path='/desktop' exact element={<Desktop />}/>
            <Route path='/explorer' element={<Explorer />}/>
            <Route path='/explorer/professional' element={<Professional />}/>
            <Route path='/viewer/project/:id' element={<ProjectViewer />}/>
            <Route path='/viewer/ui/:id' element={<DesignViewer />}/>
            <Route path='/setting' element={<Settings />}/>
            <Route path='/explorer/personal' element={<PersonalApi />}/>
            <Route path='/browser' element={<Browser />}/>
          </Routes>
          {
            start ? <StartBox bottom='3rem' width='40rem' /> : <StartBox bottom="-38rem" width="5%" />
          }
          <Taskbar />
        </Router>
      </Container>
    </ThemeProvider>
  )
}

export default App