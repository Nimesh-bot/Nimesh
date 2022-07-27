import React, { useContext } from 'react'
import { Container } from '../assets/Global'
import Search from '../components/BrowserComponents/Search'
import TabBar from '../components/BrowserComponents/TabBar'
import { ThemeContext } from '../context/theme-context'

const Browser = () => {
    const { theme } = useContext(ThemeContext)
    const API_KEY = 'AIzaSyByoBjzooOMQTA_-M2-ssExz4ICBR3XZnI'
    const SEARCH_ID = 'de2ebb8cee34b5bed'

    return (
        <Container bg={`${theme.background}`} className='w-full flex flex-col gap-y-10'>
            <TabBar />
            <Search />
        </Container>
    )
}

export default Browser