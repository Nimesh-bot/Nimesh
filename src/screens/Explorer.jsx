import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../assets/Global'
import Disks from '../components/ExplorerComponents/Disks'
import Header from '../components/Header'
import QuickAccess from '../components/ExplorerComponents/QuickAccess'
import { ThemeContext } from '../context/theme-context'

import { FileExplorer } from '../components'

const Explorer = () => {
  const { theme } = useContext(ThemeContext)

  const navigate = useNavigate()

  return (
    <Container bg={`${theme.body}`} className='w-full px-4 lg:px-16 py-4 flex flex-col gap-y-10'>
        <Header icon={FileExplorer} title="File Explorer" handleClose={() => navigate('/desktop')}/>
        <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-10.5rem)] rounded-md px-6 py-4 flex flex-col gap-y-12'>
          <QuickAccess />
          <Disks />
        </Container>
    </Container>
  )
}

export default Explorer