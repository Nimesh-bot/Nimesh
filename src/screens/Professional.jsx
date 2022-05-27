import React, { useContext } from 'react'
import { Container } from '../assets/Global'
import Header from '../components/Header'
import { ThemeContext } from '../context/theme-context'

import { Disk } from '../components'

const Professional = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container bg={`${theme.body}`} className='w-full h-full px-16 py-4 flex flex-col gap-y-10'>
        <Header icon={Disk} title="Professional Information (D:)"/>
        <Container bg={`${theme.background}`} className='w-full min-h-[calc(0.8*100vh)] max-h-auto rounded-md px-6 py-4 flex flex-col gap-y-12'>
          
        </Container>
    </Container>
  )
}

export default Professional