import React from 'react'
import styled from 'styled-components'

import { BiImage } from 'react-icons/bi'
import { VscSymbolColor } from 'react-icons/vsc'

import { Container } from '../../assets/Global'

const IconWrapper = styled.div`
    color: ${props => props.theme.primary};
`
const Sub = styled.p`
    color: ${props => props.theme.fade};
`
const Wrapper = styled.div`
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.invert}10;
    }
`

const Options = ({ handleWallpaper, handleTheme }) => {
  return (
    <Container className='w-full h-[calc(100vh-25.5rem)] rounded-md px-6 py-4 mb-2'>
        <div className='w-full md:w-2/3 mx-auto flex flex-wrap gap-8'>
            <Wrapper className='flex gap-2 w-full md:w-72 items-center px-4 py-2' onClick={handleWallpaper}>
                <IconWrapper>
                    <BiImage className='text-[45px]'/>
                </IconWrapper>
                <div>
                    <h2>Wallpaper</h2>
                    <Sub>Change how your desktop looks</Sub>
                </div>
            </Wrapper>
            <Wrapper className='flex gap-2 w-full md:w-72 items-center px-4 py-2' onClick={handleTheme}>
                <IconWrapper>
                    <VscSymbolColor className='text-[45px]'/>
                </IconWrapper>
                <div>
                    <h2>Theme</h2>
                    <Sub>Try out a different view</Sub>
                </div>
            </Wrapper>
        </div>
    </Container>
  )
}

export default Options