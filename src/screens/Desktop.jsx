import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../assets/Global'
import Spiner from '../assets/Icons/Spiner'
import More from '../components/DesktopComponents/More'
import { StateContext } from '../context/state-context'
import { ThemeContext } from '../context/theme-context'

const Desktop = () => {
  const { wallpaper, theme } = useContext(ThemeContext)
  const { loadingCount, setLoadingCount } = useContext(StateContext)
  const [ visible, setVisible ] = useState(false);
  const [ top, setTop ] = useState(0);
  const [ left, setLeft ] = useState(0);

  const [loading, isLoading] = useState(true);
  
  const DesktopContainer = styled.section`
    background-image: url(${wallpaper});
    background-size: cover;
    background-position: center;
  `

  const handleModal = (e) => {
    e.preventDefault();
    setVisible(true);
    if(e.pageY > 600 || e.pageX > 1280) {
      setTop(500);
      setLeft(1200);
    }
    else{
      setTop(e.pageY)
      setLeft(e.pageX)
    }
  }
  const handleClose = () => {
    setVisible(false);
  }
  
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
      setLoadingCount(1);
    }, 4000);
  })

  if (loadingCount === 0) {
    if (loading) {
      return (
        <Container bg={`${theme.body}`} className='flex w-full h-screen flex-col justify-center items-center fixed top-0 right-0 z-[9999] gap-y-4'>
          <Spiner />
          <h2 className='text-center'>Updating the resources. Please wait a moment.</h2>
        </Container>
      )
    }
  }

  return (
    <DesktopContainer className='flex w-full h-[calc(100vh-3rem)]' onContextMenu={handleModal} onClick={handleClose}>
      {
        visible && <More top={top} left={left}/>
      }
    </DesktopContainer>
  )
}

export default Desktop