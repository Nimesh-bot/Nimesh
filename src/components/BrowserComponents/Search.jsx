import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { GoogleIcon } from '..'
import { Container } from '../../assets/Global'
import { ThemeContext } from '../../context/theme-context'

const Logo = styled.h1`
    font-size: 72px;
    font-weight: 700;

    span {
        margin-right: 0.75rem;
        color: ${props => props.theme.primary};
    }
`
const SearchBox = styled.div`
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
        padding: 1rem; 

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
    const { theme } = useContext(ThemeContext)

    return (
        <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-8.5rem)] rounded-md py-4 flex flex-col gap-12 justify-center items-center'>
            <div className='flex flex-col items-end leading-9'>
                <Logo>
                    <span>Y</span>
                    <span>E</span>
                    <span>A</span>
                    <span>H</span>
                </Logo>
                <p className='mx-4'>Powered by Google</p>
            </div>

            <SearchBox className='w-4/5 lg:w-1/3'>
                <ImgWrapper>
                    <img src={GoogleIcon} alt='Google' className='w-8 h-8'/>
                </ImgWrapper>
                <input type='text' placeholder='Search'/>
            </SearchBox>
        </Container>
    )
}

export default Search