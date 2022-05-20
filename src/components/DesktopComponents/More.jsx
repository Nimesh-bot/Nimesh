import React from 'react'
import styledComponents from 'styled-components'

const Modal = styledComponents.div`
    background-color: ${props => props.theme.body};
    border-radius: 0.75rem;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
`
const Items = styledComponents.p`
    color: ${props => props.theme.text};
    padding: 0.75rem 1rem;
    width: 16rem;
    font-size: 0.75rem;
    font-weight: 300;
    cursor: pointer;
    
    &:hover {
        background-color: ${props => props.theme.primary};
    }

    :first-child {
        border-radius: 0.75rem 0.75rem 0 0;
    }

    :last-child {
        border-radius: 0 0 0.75rem 0.75rem;
`

const More = ({ top, left }) => {
  return (
    <Modal className='absolute flex flex-col gap-y-1 z-10' top={top} left={left}>
        <Items onClick={() => window.location.reload()}>Refresh</Items>
        <Items>Toggle Icons</Items>
        <Items>Hire Me</Items>
        <Items>Settings</Items>
    </Modal>
  )
}

export default More