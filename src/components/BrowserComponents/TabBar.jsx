import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../context/theme-context'

import { IoIosClose } from 'react-icons/io'

import { Browser } from '..'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
    background-color: ${props => props.theme.body};
`

const Title = styled.h3`
  color: ${props => props.color}
`
const IconWrapper = styled.div`
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.color};

  &:hover {
    background-color: ${props => props.theme.primary};
  }
`

const TabBar = () => {
    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate();
    
    return (
        <Container className='w-full h-12 flex justify-between sticky top-0 left-0 px-16'>
            <div className='flex gap-x-2 items-center py-4'>
                <img src={Browser} alt="File Explorer" className='w-6 h-6'/>
                <Title className={`text-base font-normal`} color={`${theme.text}`}>Yeah</Title>
            </div>
            <div className='flex gap-x-8'>

            <IconWrapper className='rounded-md flex justify-center items-center px-1'>
                <IoIosClose className='w-8 h-8' color={`${theme.text}`} onClick={() => navigate('/desktop')}/>
            </IconWrapper>
            </div>
        </Container>
    )
}

export default TabBar