import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Me, SettingsIcon } from '..'
import Header from '../Header'

const Container = styled.div`
    width: 100%;
    height: 20rem;
    background-color: ${props => props.theme.body};

    p {
        color: ${props => props.theme.fade};
    }
`

const HeadBar = () => {
    const navigate = useNavigate();
    
    return (
        <Container className='px-16 py-4 flex flex-col gap-y-4'>
            <Header icon={SettingsIcon} title="Settings" handleClose={() => navigate(-1)}/>

            <div className='flex h-[calc(100%-4rem)] justify-center items-center gap-4'>
                <img src={Me} alt="Nimesh Shakya" className='w-32 h-32 rounded-full object-cover'/>
                <div className='flex flex-col gap-y-1'>
                    <h1>Nimesh Shakya</h1>
                    <div className='flex flex-col'>
                        <p>somit409@gmail.com</p>
                        <p>9860120470</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HeadBar