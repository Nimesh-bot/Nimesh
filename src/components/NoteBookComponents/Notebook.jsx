import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'

import Draggable from 'react-draggable';

import { IoIosClose } from 'react-icons/io'
import { StateContext } from '../../context/state-context'

const Container = styled.div`
    height: 60vh;
    position: absolute;
    top: 35%;
    left: 35%;
    display: flex;
    flex-direction: column;
    z-index: 90;
`
const HeadingBar = styled.div`
    width: 100%;
    height: 3rem;
    background-color: ${props => props.theme.body};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px 8px 0 0;

    h2 {
        padding: 0 2rem;
        color: ${props => props.theme.text};
    }

    div {
        padding: 0 1rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 8px 0 0;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.text};
    }
`
const Content = styled.div`
    width: 100%;
    height: calc(60vh-3rem);
    padding: 2rem;
    background-color: ${props => props.theme.background};
    border: 0.75px solid ${props => props.theme.neutral}50;
    border-radius: 0 0 8px 8px;
    
    textarea {
        width: 100%;
        min-height: 30vh;
        max-height: calc(60vh - 8rem);
        background-color: transparent;
        color: ${props => props.theme.text};
        border: none;

        &:focus {
            outline: none;
            border: none;
        }
    }
` 

const Notebook = () => {
    const { setNotePadOpen } = useContext(StateContext);
    const [note, setNote] = useState('');

    useEffect(() => {
        setNote(localStorage.getItem('note'));
    }, [setNote]);

    const handleNoteUpdate = (e) => {
        setNote(e.target.value);
        localStorage.setItem('note', e.target.value);
    }

    return (
        <Draggable>
            <Container className='w-2/3 lg:w-1/3'>
                <HeadingBar>
                    <h2>Notebook</h2>
                    <div onClick={() => setNotePadOpen(false)}>
                        <IoIosClose className='text-[27px]'/>
                    </div>
                </HeadingBar>
                <Content>
                    <textarea 
                        value={note} 
                        placeholder='Hello, thank you for opening notebook. Here you can keep your notes and ideas. Write whatever you want to keep note of and it auto saves. Enjoy!' 
                        onChange={handleNoteUpdate} />
                </Content>
            </Container>
        </Draggable>
    )
}

export default Notebook