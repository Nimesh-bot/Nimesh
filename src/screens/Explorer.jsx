import React, { useContext } from 'react'
import { Container } from '../assets/Global'
import Header from '../components/ExplorerComponents/Header'
import QuickAccess from '../components/ExplorerComponents/QuickAccess'
import { ThemeContext } from '../context/theme-context'

const Explorer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container bg={`${theme.body}`} className='w-full h-full px-16 py-4 flex flex-col gap-y-10'>
        <Header />
        <Container bg={`${theme.background}`} className='w-full h-[calc(0.8*100vh)] rounded-md px-6 py-4'>
          <QuickAccess />
        </Container>
    </Container>
  )
}

export default Explorer