import React, { useContext } from 'react'
import { Container } from '../assets/Global'
import Search from '../components/BrowserComponents/Search'
import SearchResult from '../components/BrowserComponents/SearchResult'
import TabBar from '../components/BrowserComponents/TabBar'
import { ThemeContext } from '../context/theme-context'

const Browser = () => {
    const { theme } = useContext(ThemeContext)
    // const apikey = process.env.API_KEY
    // const searchId = process.env.SEARCH_ID

    return (
        <Container bg={`${theme.background}`} className='w-full flex flex-col'>
            <TabBar />
            <Search />
            <SearchResult />
        </Container>
    )
}

export default Browser