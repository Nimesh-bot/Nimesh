import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components'
import { StateContext } from '../../context/state-context'

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
    const { setHireOpen } = useContext(StateContext);

    return (
        <Modal className='absolute flex flex-col gap-y-1 z-10' top={top} left={left}>
            <Items onClick={() => window.location.reload()}>Refresh</Items>
            <Items onClick={() => window.open('https://www.buymeacoffee.com/saqyeah', '_blank')}>Buy me a Coffee</Items>
            <Items onClick={() => setHireOpen(true)}>Hire Me</Items>
            <Link to='/setting'>
                <Items>Settings</Items>
            </Link>
        </Modal>
    )
}

export default More