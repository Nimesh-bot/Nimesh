import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from '../assets/Global'
import { StateContext } from '../context/state-context'
import { ThemeContext } from '../context/theme-context'
import axiosInstance from '../utils/axios.config'

const Button = styled.button`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.primary};
    padding: 1rem 3rem;

    &:hover {
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.background};
    }
`

const BoardingScreen = ({ click }) => {
    const { theme } = useContext(ThemeContext)
    const { setLoadingCount } = useContext(StateContext)

    const navigate = useNavigate();

    useEffect(() => {
        setLoadingCount(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const wakeUp = async () => {
            const response = await axiosInstance.get('/')
            if (response.data.status === 'success') {
                console.log(response?.data?.message)
            }
        }
        wakeUp();
    }, []);

    return (
        <Container bg={`${theme.body}`} className='flex w-full h-screen justify-center items-center' onClick={click}>
            <Button onClick={() => navigate('/desktop')}>
                PROCEED
            </Button>
        </Container>
    )
}

export default BoardingScreen