import React, { useContext } from 'react'
import styledComponents from 'styled-components'
import { FileExplorer } from '../components'
import { ThemeContext } from '../context/theme-context'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosClose } from 'react-icons/io'

const Container = styledComponents.section`
  background-color: ${props => props.theme.body}
`
const Title = styledComponents.h3`
  color: ${props => props.color}
`
const InputWrapper = styledComponents.div`
  background-color: ${props => props.theme.background};

  input {
    border: none;
    outline: none;
    color: ${props => props.theme.text};
  }
`
const IconWrapper = styledComponents.div`
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.color};

  &:hover {
    background-color: ${props => props.theme.primary};
  }
`

const Explorer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Container className='w-full px-16 py-4'>
        <div className='w-full flex justify-between'>
          <div className='flex gap-x-2 items-center'>
            <img src={FileExplorer} alt="File Explorer" className='w-6 h-6'/>
            <Title className={`text-base font-normal`} color={`${theme.text}`}>File Explorer</Title>
          </div>
          <div className='flex gap-x-8'>
            <InputWrapper className='flex justify-between items-center rounded-md px-4'>
              <input className="py-2 text-xs rounded-md border-none bg-transparent" placeholder='Search here.'/>
              <AiOutlineSearch className='w-4 h-4' color={`${theme.primary}`}/>
            </InputWrapper>
            <IconWrapper className='rounded-md flex justify-center items-center px-1'>
              <IoIosClose className='w-8 h-8' color={`${theme.text}`}/>
            </IconWrapper>
          </div>
        </div>
    </Container>
  )
}

export default Explorer