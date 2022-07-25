import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../assets/Global'
import { ThemeContext } from '../../context/theme-context'
import Shell from './Shell'

const Requests = styled.div`
    background-color: ${props => props.theme.body};
    border-radius: 8px;
    padding: 1rem;
`
const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
`
const ListItem = styled.li`
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.selected ? props.theme.text : props.theme.fade};
    cursor: pointer;
    display: flex;
    gap: 0.75rem;

    &:hover {
        color: ${props => props.theme.text};
    }

    span {
        font-size: 14px;
        font-weight: 400;
        color: ${props => props.theme.primary};
    }
`

const AppBody = () => {
    const { theme } = useContext(ThemeContext);
    const [request, setRequest] = useState('who_am_i');
    
    const getActive = (location) => {
        if (request === location) {
            return true
        }
        else {
            return false
        }
    }
    
    return (
        <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-10.5rem)] rounded-md py-4 flex gap-x-12'>
            <Requests className='w-72 hidden md:flex flex-col gap-y-8'>
                <h3 className='text-base font-normal'>API Requests</h3>
                <List>
                    <ListItem onClick={() => setRequest('who_am_i')} selected={getActive('who_am_i')}>
                        <span>GET</span> 
                        Who am I
                    </ListItem>
                    <ListItem onClick={() => setRequest('my_education')} selected={getActive('my_education')}>
                        <span>GET</span> 
                        My Education
                    </ListItem>
                    <ListItem onClick={() => setRequest('my_hobbies')} selected={getActive('my_hobbies')}>
                        <span>GET</span> 
                        My Hobbies
                    </ListItem>
                    <ListItem onClick={() => setRequest('profession')} selected={getActive('profession')}>
                        <span>GET</span> 
                        Current Profession
                    </ListItem>
                    <ListItem onClick={() => setRequest('experience')} selected={getActive('experience')}>
                        <span>GET</span> 
                        My Experience
                    </ListItem>
                    <ListItem onClick={() => setRequest('strength')} selected={getActive('strength')}>
                        <span>GET</span> 
                        Strengths
                    </ListItem>
                    <ListItem onClick={() => setRequest('weakness')} selected={getActive('weakness')}>
                        <span>GET</span> 
                        Weakness
                    </ListItem>
                    <ListItem onClick={() => setRequest('goal')} selected={getActive('goal')}>
                        <span>GET</span> 
                        My Goal
                    </ListItem>
                </List>
            </Requests>

            <Shell request={request}/>
        </Container>
    )
}

export default AppBody