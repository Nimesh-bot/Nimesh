import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../assets/Global'
import { ThemeContext } from '../context/theme-context'
import Header from '../components/Header'
import Organizations from '../components/ProfessionalComponents/Organizations'

import { Disk } from '../components'
import Frontend from '../components/ProfessionalComponents/Frontend'
import UI from '../components/ProfessionalComponents/UI'
import Skills from '../components/ProfessionalComponents/Skills'

const Professional = () => {
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate();

  return (
    <Container bg={`${theme.body}`} className='w-full px-16 py-4 flex flex-col gap-y-10'>
        <Header icon={Disk} title="Professional Information (D:)" handleClose={() => navigate('/desktop')}/>
        <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-10.5rem)] rounded-md px-6 py-6'>
          <div className='overflow-y-scroll w-full h-full flex flex-col gap-y-12'>
            <Organizations />
            <Frontend />
            <UI />
            <Skills />
          </div>
        </Container>
    </Container>
  )
}

export default Professional