import React, { useContext, useState } from 'react'
import styledComponents from 'styled-components'
import More from '../components/DesktopComponents/More'
import { ThemeContext } from '../context/theme-context'

const Desktop = () => {
  const { wallpaper} = useContext(ThemeContext)
  const [ visible, setVisible ] = useState(false);
  const [ top, setTop ] = useState(0);
  const [ left, setLeft ] = useState(0);
  
  const Container = styledComponents.section`
    background-image: url(${wallpaper});
    background-size: cover;
  `

  const handleModal = (e) => {
    e.preventDefault();
    setVisible(true);
    setTop(e.pageY);
    setLeft(e.pageX);
    console.log("Working")
  }
  const handleClose = () => {
    setVisible(false);
  }

  return (
    <Container className='w-full h-screen' onContextMenu={handleModal} onClick={handleClose}>
      {
        visible && <More top={top} left={left}/>
      }
    </Container>
  )
}

export default Desktop