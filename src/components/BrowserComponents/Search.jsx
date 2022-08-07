// import React, { useState } from 'react'
import styled from 'styled-components'
import { GoogleIcon } from '..'

// import { GoSearch } from 'react-icons/go'
// import { BiImage } from 'react-icons/bi'
// import { FaRegNewspaper } from 'react-icons/fa'
// import { MdSmartDisplay } from 'react-icons/md'

import { useResultContext } from '../../context/ResultContextProvider'

const Container = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
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
const Tabs = styled.div`
    border-bottom: 1px solid ${props => props.theme.body}50;
`
// const Navs = styled.div`
//     display: flex;
//     gap: 0.5rem;
//     align-items: center;
//     cursor: pointer;

//     color: ${props => props.color === true ? props.theme.primary : props.theme.text};
// `

const Search = () => {
    const { searchTerm, setSearchTerm, setSearch, pathname, setPathname } = useResultContext();

    // const [active, setActive] = useState('1');

    // const getActive = (id) => {
    //     if(active === id) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }

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
            <Wrapper>
                <Logo>Yeah <span>POWERED BY GOOGLE</span></Logo>
                <SearchBox onSubmit={handleSearch}>
                    <ImgWrapper>
                        <img src={GoogleIcon} alt='Google' className='w-8 h-8'/>
                    </ImgWrapper>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                </SearchBox>
            </Wrapper>

            <Tabs className='h-[2rem] flex items-center gap-x-8 px-16'>
                {/* <Navs color={getActive('1')} onClick={() => setActive('1')}>
                    <GoSearch className='text-[16px]' />
                    All
                </Navs>
                <Navs color={getActive('2')} onClick={() => setActive('2')}>
                    <BiImage className='text-[16px]' />
                    Images
                </Navs>
                <Navs color={getActive('3')} onClick={() => setActive('3')}>
                    <MdSmartDisplay className='text-[16px]' />
                    Videos
                </Navs>
                <Navs color={getActive('4')} onClick={() => setActive('4')}>
                    <FaRegNewspaper className='text-[16px]' />
                    News
                </Navs> */}
            </Tabs>
        </Container>
    )
}

export default Search