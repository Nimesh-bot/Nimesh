import React from 'react'
import styled from 'styled-components'
import { GoogleIcon } from '..'

import { useResultContext } from '../../context/ResultContextProvider'

const Container = styled.div`
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid ${props => props.theme.body}50;
    display: flex;
    align-items: center;
    padding: 0 4rem;
    gap: 4rem;
`

const Logo = styled.h1`
    font-size: 27px;
    font-weight: 500;
    color: ${props => props.theme.primary};
    letter-spacing: 2px;
    
    span {
        color: ${props => props.theme.text};
        font-weight: 300;
        letter-spacing: 5px;
        font-size: 12px;
    }

`
const SearchBox = styled.form`
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${props => props.theme.body};
    border-radius: 8px;

    input {
        flex: 1;
        border-radius: 8px;
        background-color: ${props => props.theme.body};
        border: none;
        color: ${props => props.theme.text};
        padding: 0.5rem 1rem; 

        &:focus {
            outline: none;
        }
    }
`
const ImgWrapper = styled.div`
    padding: 0.5rem;
    background-color: ${props => props.theme.neutral};
    border-radius: 8px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Search = () => {
    const { searchTerm, setSearchTerm, setSearch, pathname, setPathname } = useResultContext();

    const handleSearch = (e) => {
        setPathname('/search');
        e.preventDefault();
        if(searchTerm) {
            if(pathname === '/videos') {
                setSearch(`/search/q=${searchTerm} videos`);
            }
            else {
                setSearch(`${pathname}/q=${searchTerm}&num=10`);
            }
        }
    }

    return (
        <Container>
            <Logo>Yeah <span>POWERED BY GOOGLE</span></Logo>
            <SearchBox onSubmit={handleSearch}>
                <ImgWrapper>
                    <img src={GoogleIcon} alt='Google' className='w-8 h-8'/>
                </ImgWrapper>
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            </SearchBox>
        </Container>
    )
}

export default Search