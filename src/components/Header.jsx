import React, { useContext } from 'react'
import { IoIosClose } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { ThemeContext } from '../context/theme-context'

const Title = styledComponents.h3`
  color: ${props => props.color}
`
const InputWrapper = styledComponents.div`
  color: ${props => props.theme.primary};
  cursor: context-menu;

  h5{
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

const Header = ({ icon, title }) => {
  const { theme } = useContext(ThemeContext)
  
  const navigate = useNavigate()
  const handleClose = () => {
    navigate(-1)
  }

  return (
    <div className='w-full flex justify-between'>
        <div className='flex gap-x-2 items-center'>
        <img src={icon} alt="File Explorer" className='w-6 h-6'/>
        <Title className={`text-base font-normal`} color={`${theme.text}`}>{title}</Title>
        </div>
        <div className='flex gap-x-8'>

        <InputWrapper className='flex flex-col gap-y-0.5'>
          <h5 className='text-sm font-medium'>Nimesh Shakya</h5>
          <p className='text-xs font-light'>UI/UX Designer and Frontend Developer</p>
        </InputWrapper>

        <IconWrapper className='rounded-md flex justify-center items-center px-1'>
            <IoIosClose className='w-8 h-8' color={`${theme.text}`} onClick={handleClose}/>
        </IconWrapper>
        </div>
    </div>
  )
}

export default Header