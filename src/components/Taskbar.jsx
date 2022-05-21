import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { RiDashboardFill } from 'react-icons/ri'
import Browser from '../assets/Icons/Browser.ico'
import Notepad from '../assets/Icons/notepad.png'
import FileExplorer from '../assets/Icons/file.png'
import { Link } from 'react-router-dom'

const Container = styledComponents.div`
  background-color: ${props => props.theme.body};
`
const MenuIcon = styledComponents.div`
  color: ${props => props.theme.primary};

  &:hover {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
  }
`
const Time = styledComponents.p`
  color: ${props => props.theme.text};
  font-size: 0.75rem;
`

const Taskbar = () => {
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

  return (
    <Container className='hidden absolute bottom-0 w-screen h-12 backdrop-blur-sm backdrop-opacity-10 lg:flex justify-between items-center py-2 '>
      <div>
      </div>
      <div className='flex gap-x-8'>
        <Link to='/'>
          <MenuIcon>
            <RiDashboardFill className={`w-8 h-8`}/>
          </MenuIcon>
        </Link>
        <img src={Browser} alt="Web" className='w-8 h-8 hover:scale-110'/>
        <Link to='/explorer'><img src={FileExplorer} alt="explorer" className='w-8 h-8 hover:scale-110'/></Link>
        <img src={Notepad} alt="notes" className='w-8 h-8 hover:scale-110'/>
      </div>
      <div className='w-max h-full flex justify-end gap-x-8'>
        <div className='text-center'>
          <Time>{currentTime}</Time>
          <Time>{day}, {year} {month} {date}</Time>
        </div>
        <div className='w-4 h-full border-l-2 border-l-white' />
      </div>
    </Container>
  )
}

export default Taskbar