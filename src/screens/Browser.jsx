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
        <>
            <Container bg={`${theme.background}`} className='w-full flex flex-col items-center justify-center gap-y-8 h-[calc(100vh-3rem)]'>
                <img 
                    src='https://img.wattpad.com/37aea72b643e803e1cfff1303def4014321e9578/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f31426f4d4d3337494e52637636513d3d2d3732303534323735352e313539363235333733653332336563353632353633353138313033322e676966' 
                    alt='Working' 
                    className='w-56 h-56 mix-blend-overlay'
                />
                <div>
                    <p className='text-base px-4 text-center font-light'>Sorry this feature is not yet implemented in mobile version</p>
                    <h6 className='text-xl px-4 text-center font-black'>COMING SOON</h6>
                </div>
            </Container>
            <Container bg={`${theme.background}`} className='hidden w-full lg:flex flex-col'>
                <TabBar />
                <Search />
                <SearchResult />
            </Container>
        </>
    )
}

export default Browser