import React from 'react'
import styledComponents from 'styled-components'
import { RiDashboardFill } from 'react-icons/ri'

const Container = styledComponents.div`
  background-color: ${props => props.theme.body};
`
const MenuIcon = styledComponents.div`
  color: ${props => props.theme.primary};

  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
    box-shadow: 0px 3px 6px ${props => props.theme.hover};
  }
`

const Taskbar = () => {
  return (
    <Container className='absolute bottom-0 w-full h-12 backdrop-blur-sm flex justify-center items-center'>
        <MenuIcon>
          <RiDashboardFill className={`w-8 h-8`}/>
        </MenuIcon>
    </Container>
  )
}

export default Taskbar