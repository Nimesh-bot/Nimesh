import React, { useContext, useEffect } from 'react'
// import ReactPlayer from 'react-player'
import styled, { ThemeContext } from 'styled-components'

import { Container } from '../../assets/Global'
import { useResultContext } from '../../context/ResultContextProvider'
import Loading from '../Loading'

const Ad = styled.div`
    background-color: ${props => props.theme.primary}25;
    height: calc(100vh-24rem);
    border-radius: 8px;
    margin-bottom: 4rem;
`

const SearchResult = () => {
    const { theme } = useContext(ThemeContext)
    const { results, loading, pathname, getResults, search } = useResultContext()

    useEffect(() => {
        getResults(search)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    if (loading) {
        return <Loading height='calc(100vh - 12rem)'/>
    }

    switch (pathname) {
        case '/search':
            return (
                <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-14rem)] py-4 flex mt-8 justify-between px-16'>
                    <div className='flex-1 flex flex-col gap-8'>
                        {
                            results?.results?.map(({ link, title }, index) => (
                                <div key={index} className='md:w-2/5 w-full'>
                                    <a href={link} target='_blank' rel='noreferrer'>
                                        <p>
                                            {
                                                link.length > 30 ? link.substring(0, 30) + '...' : link
                                            }
                                        </p>
                                        <h3 className='hover:underline'>
                                            {title}
                                        </h3>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                    <Ad className='hidden lg:flex w-3/12 justify-end'>
                        <img src='http://iae.news/wp-content/uploads/2021/04/b280b67696c1a7d17a6d26e46ff9f254-1.gif' alt='coffee' className='w-auto h-full' />
                    </Ad>
                </Container>
            );
        case '/images':
            return (
                <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-12rem)] py-4 flex mt-8 justify-between px-16'>
                    {
                        results?.image_results?.map(({ image, link: { href, title } }, index) => (
                            <a href={href} key={index} target='_blank' rel='noreferrer'>
                                <img src={image} alt={title} className='w-full h-auto' loading='lazy'/>
                                <p className='break-words mt-2'>
                                    {title}
                                </p>
                            </a>
                        ))
                    }
                </Container>
            )
        case '/news':
            return 'Search';
        case '/videos':
            return 'Search';
    
        default:
            return (
                <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-12rem)] py-4 flex mt-8 justify-between px-16'>
                    ERROR! PLEASE TRY AGAIN
                </Container>
            )
    }
}

export default SearchResult