import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'

import { Container } from '../assets/Global'
import { useNavigate } from 'react-router-dom'

import { SettingsIcon } from '../components'
import Header from '../components/Header'

const Settings = () => {
    const { theme } = useContext(ThemeContext)
    const navigate = useNavigate();

    return (
        <Container bg={`${theme.body}`} className='w-full px-16 py-4 flex flex-col gap-y-8'>
            <Header icon={SettingsIcon} title="Settings" handleClose={() => navigate(-1)}/>
        
            <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-10.5rem)] rounded-md px-6 py-4 flex flex-col gap-y-12 mb-2'>

            </Container>
        </Container>
    )
}

export default Settings