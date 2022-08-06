import React, { useContext } from 'react'
import styled from 'styled-components'

import { FaHireAHelper } from 'react-icons/fa'
import { SiBuymeacoffee } from 'react-icons/si'
import { BsQuestionDiamondFill } from 'react-icons/bs'

import { Browser, FileExplorer, Notepad } from '..'
import { StateContext } from '../../context/state-context'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  h2{
    color: ${props => props.theme.text};
  }
  h4{
    color: ${props => props.theme.fade};

    &:hover {
      color: ${props => props.theme.text};
    }
  }
`
const Icon = styled.div`
  font-size: 18px;
  color: ${props => props.color || props.theme.primary};
`

const Contents = () => {
  const { setNotePadOpen, setStart, setHireOpen, start } = useContext(StateContext);

  return (
    <>
      {
        start &&
        <Container className='w-full md:w-[100%-5rem] h-full flex flex-col'>
          <h3>Navigate Easily</h3>
    
          <div className='flex gap-x-2 items-center mt-8 cursor-pointer' onClick={() => {setHireOpen(true); setStart(false)}}>
            <Icon color='#59CE8F'>
              <FaHireAHelper />
            </Icon>
            <h4>Hire Me</h4>
          </div>
          
          <div className='flex gap-x-2 items-center cursor-pointer' onClick={() => window.open('https://www.buymeacoffee.com/saqyeah', '_blank')}>
            <Icon color='#FFC23C'>
              <SiBuymeacoffee />
            </Icon>
            <h4>Buy Me a Coffee</h4>
          </div>
    
          <Link to='/explorer'>
            <div className='flex gap-x-2 items-center cursor-pointer'>
              <img src={FileExplorer} alt='Explorer' className='w-auto h-4'/>
              <h4>File Explorer</h4>
            </div>
          </Link>
          
          <div className='flex gap-x-2 items-center cursor-pointer' onCLick={() => {setNotePadOpen(true); setStart(false)}}>
            <img src={Notepad} alt='Note' className='w-auto h-4'/>
            <h4>Note</h4>
          </div>
    
          <Link to='/browser'>
            <div className='flex gap-x-2 items-center cursor-pointer'>
              <img src={Browser} alt='Browser' className='w-auto h-4'/>
              <h4>Yeah</h4>
            </div>
          </Link>
    
          <Link to='/explorer/personal'>
            <div className='flex gap-x-2 items-center cursor-pointer'>
              <BsQuestionDiamondFill />
              <h4>About Me</h4>
            </div>
          </Link>
        </Container>
      }
    </>
  )
}

export default Contents