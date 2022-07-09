import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../assets/Global'
import { ThemeContext } from '../context/theme-context'

const Button = styled.button`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    padding: 1rem 3rem;

    &:hover {
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.background};
    }
`

const BoardingScreen = () => {
    const { theme } = useContext(ThemeContext)
    
    const navigate = useNavigate();

    return (
        <Container bg={`${theme.body}`} className='flex w-full h-screen justify-center items-center'>
            <Button onClick={() => navigate('/desktop')}>
                PROCEED
            </Button>
        </Container>
    )
}

export default BoardingScreen