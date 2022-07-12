import React, { useContext, useState } from 'react'

import { ThemeContext } from '../context/theme-context'
import { Container } from '../assets/Global'
import HeadBar from '../components/SettingsComponents/HeadBar'
import Options from '../components/SettingsComponents/Options'
import Wallpaper from '../components/SettingsComponents/Wallpaper'
import ThemeChange from '../components/SettingsComponents/ThemeChange'


const Settings = () => {
    const { theme } = useContext(ThemeContext)
    const [options, setOptions] = useState(0);

    return (
        <Container bg={`${theme.background}`} className='w-full flex flex-col gap-y-8'>
            <HeadBar />
            {
                options === 0 ?
                <Options handleWallpaper={() => setOptions(1)} handleTheme={() => setOptions(2)} />
                :
                options === 1 ?
                <Wallpaper handleClick={() => setOptions(0)} />
                :
                <ThemeChange handleClick={() => setOptions(0)} />
            }
        </Container>
    )
}

export default Settings