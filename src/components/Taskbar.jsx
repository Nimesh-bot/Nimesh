import React, { useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { RiDashboardFill } from 'react-icons/ri'

import { StateContext } from '../context/state-context'

import Browser from '../assets/Icons/Browser.ico'
import Notepad from '../assets/Icons/notepad.png'
import FileExplorer from '../assets/Icons/file.png'

const Container = styled.div`
  background-color: ${props => props.theme.body};
  z-index: 99;
`
const MenuIcon = styled.div`
  color: ${props => props.theme.primary};
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const Icons = styled.div`
  padding: 0.5rem;
  position: relative;
  border-radius: 8px;

  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    width: ${props => props.afterWidth};
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.text};
    height: 2px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.text}20;
  }
`
const Time = styled.p`
  color: ${props => props.theme.text};
  font-size: 0.75rem;
`
const QuickEscape = styled.div`
  border-right-color: ${props => props.theme.invert};
`

const Taskbar = () => {
  const { setNotePadOpen, setStart, start } = useContext(StateContext);
  
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }
  setInterval(updateTime, 1000)

  const newDate = new Date()
  const weekDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  
  const day = weekDay[newDate.getDay()]
  const month = months[newDate.getMonth()]
  const date = newDate.getDate() 
  const year = newDate.getFullYear()

  let location = useLocation();
  const getActive = (path) => {
    if (location.pathname === path) {
      return '100%'
    }
    else{
      return '0%'
    }
  }

  return (
    <>
      {
        location.pathname !== '/' && 
        <Container className='hidden sticky left-0 bottom-0 w-full h-12 backdrop-blur-sm backdrop-opacity-10 lg:flex justify-between items-center'>
          <div>
          </div>

          <div className='flex gap-x-8'>
            <MenuIcon onClick={() => setStart(!start)}>
              <RiDashboardFill className={`w-8 h-8`}/>
            </MenuIcon>
            <Icons afterWidth={`${getActive('/browser')}`}>
              <img src={Browser} alt="Web" className='w-8 h-8'/>
            </Icons>
            {
              location.pathname !== '/explorer' ? 
              (
                <Link to='/explorer'>
                  <Icons afterWidth={`${getActive('/explorer')}`}>
                    <img src={FileExplorer} alt="explorer" className={`w-8 h-8 `}/>
                  </Icons>
                </Link>
              )
              :
              (
                <Icons afterWidth={`${getActive('/explorer')}`}>
                  <img src={FileExplorer} alt="explorer" className={`w-8 h-8 `}/>
                </Icons>
              )
            }
            <Icons afterWidth={`${getActive('/notepad')}`}>
              <img src={Notepad} alt="notes" className='w-8 h-8' onClick={() => setNotePadOpen(true)}/>
            </Icons>
          </div>
          
          <div className='w-max h-full flex justify-end gap-x-8'>
            <div className='text-center cursor-context-menu pt-2'>
              <Time>{currentTime}</Time>
              <Time>{day}, {year} {month} {date}</Time>
            </div>
            <Link to='/desktop'>
              <QuickEscape className='w-4 h-full border-l-2'/>
            </Link>
          </div>
        </Container>
      }
    </>
  )
}

export default Taskbar