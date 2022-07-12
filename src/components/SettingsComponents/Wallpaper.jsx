import React, { useContext } from 'react'
import styled from 'styled-components'

import { Container } from '../../assets/Global'
import { backgroundList } from '../../context/Backgrounds'
import { ThemeContext } from '../../context/theme-context'

const Sub = styled.p`
    color: ${props => props.theme.fade};
`
const Wallpaper = ({ handleClick }) => {
    const { wallpaper, setWallpaper } = useContext(ThemeContext);

    return (
        <Container className='w-full h-[calc(100vh-25.5rem)] rounded-md px-6 py-4 mb-2'>
            <div className='w-full md:w-2/3 mx-auto flex flex-col gap-8'>
                <p onClick={handleClick} className='cursor-pointer underline'>Back to Settings</p>
                <div className='flex flex-col'>
                    <h1>Wallpapers</h1>
                    <Sub>Select any to change current wallpaper</Sub>
                </div>
                <div className='flex gap-8 flex-wrap'>
                    {
                        backgroundList.map((item, index) => (
                            <>
                                {
                                    item.src === wallpaper ?
                                    <img src={item.src} alt='Wallpaper' key={index} className='h-32 aspect-video rounded object-cover mix-blend-luminosity cursor-not-allowed'/>
                                    :
                                    <img 
                                        src={item.src} 
                                        alt='Wallpaper' 
                                        key={index} 
                                        className='h-32 aspect-video rounded object-cover' 
                                        onClick={() => {
                                            setWallpaper(item.src); 
                                            localStorage.setItem('wallpaper', item.src);
                                        }}/>
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default Wallpaper