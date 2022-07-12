import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../../context/theme-context';
import { Container } from '../../assets/Global';
import { themes } from '../../context/Themes';

const Sub = styled.p`
    color: ${props => props.theme.fade};
`

const ThemeChange = ({ handleClick }) => {
    const { setTheme } = useContext(ThemeContext);
  return (
    <Container className='w-full h-[calc(100vh-25.5rem)] rounded-md px-6 py-4 mb-2'>
        <div className='w-full md:w-2/3 mx-auto flex flex-col gap-8'>
            <p onClick={handleClick} className='cursor-pointer underline'>Back to Settings</p>
            <div className='flex flex-col'>
                <h1>Theme</h1>
                <Sub>Select any color palette</Sub>
            </div>
            <div className='flex gap-8 flex-wrap'>
                <div className='flex flex-col gap-y-2' 
                    onClick={() => {
                        setTheme(themes.neon); 
                        localStorage.setItem('theme', 'neon');
                    }}
                >
                    <div className='flex w-32 h-32'>
                        <div className='h-full w-1/2 bg-[#251D3A]'/>
                        <div className='h-full w-1/2 bg-[#F73D93]'/>
                    </div>
                    <p>Neon Theme</p>
                </div>
                <div className='flex flex-col gap-y-2' 
                    onClick={() => {
                        setTheme(themes.heal); 
                        localStorage.setItem('theme', 'heal');
                    }}
                >
                    <div className='flex w-32 h-32'>
                        <div className='h-full w-1/2 bg-[#2C272E]'/>
                        <div className='h-full w-1/2 bg-[#3ef6a1]'/>
                    </div>
                    <p>Heal</p>
                </div>
                <div className='flex flex-col gap-y-2' 
                    onClick={() => {
                        setTheme(themes.calm); 
                        localStorage.setItem('theme', 'calm')
                    }}
                >
                    <div className='flex w-32 h-32'>
                        <div className='h-full w-1/2 bg-[#EFFFFD]'/>
                        <div className='h-full w-1/2 bg-[#42C2FF]'/>
                    </div>
                    <p>Calm Theme</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default ThemeChange