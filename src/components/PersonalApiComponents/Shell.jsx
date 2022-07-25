import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { LoaderCalm, LoaderHeal, LoaderNeon } from '..'
import { ThemeContext } from '../../context/theme-context'

const Container = styled.div`
    background-color: ${props => props.theme.body};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`
const HeadingWrapper = styled.div`
    border-bottom: 0.5px solid ${props => props.theme.background};
    padding-bottom: 1rem;
    height: 3.5rem;

    h3 {
        flex-[0.5];
        color: ${props => props.theme.primary};
    }
`
const InputWrapper = styled.div`
    background-color: transparent;
    flex: 2;
`
const Button = styled.div`
    background-color: ${props => props.theme.primary}25;
    color: ${props => props.theme.primary};
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
`
const Response = styled.div`
    width: 100%;
    height: calc(100% - 3.5rem);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: relative;
`
const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.body}15;
    backdrop-filter: blur(2px) brightness(110%);
`

const Shell = ({ request }) => {
    const { theme } = useContext(ThemeContext);
    const [loading, setLoading] = useState(false);

    const [res, setRes] = useState({ 
        message: 'Please make a request',
    })

    const handleSend = (req) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            if(req === undefined || req === '') {
                return setRes({
                    status: 'error',
                    message: 'Please make an API request'
                })
            }
            if (req === 'who_am_i') {
                setRes({
                    status: 'success',
                    fullname: 'Nimesh Shakya',
                    email: 'somit409@gmail.com',
                    profession: 'Frontned Developer',
                    age: '21',
                })
            }
            if (req === 'my_education') {
                setRes({
                    status: 'success',
                    school: 'Next Generation Residential Academy',
                    highschool: 'Trinity Internation Education',
                    bachelor: 'Softwarica College of IT & Ecommerce (Undergraduate)',
                })
            }
            if (req === 'my_hobbies') {
                setRes({
                    status: 'success',
                    hobbies: ['Gaming', 'Anime', 'Coding', 'UI Designing'],
                })
            }
            if (req === 'profession') {
                setRes({
                    status: 'success',
                    bitmosys: 'Frontend Developer and Designer',
                    softed: 'Frontend Developer and UI/UX Designer',
                })
            }
            if (req === 'experience') {
                setRes({
                    status: 'success',
                    organizations: [
                        {
                            name: 'Kurma Tech',
                            position: 'Graphic Designer',
                            duration: 'August 2021 - October 2021'
                        },
                        {
                            name: 'Bitmosys',
                            position: 'Frontend Developer',
                            duration: 'March 2022 - Present'
                        },
                        {
                            name: 'Softed',
                            position: 'Frontend Developer',
                            duration: 'April 2022 - Present'
                        }
                    ]
                })
            }
            if (req === 'strength') {
                setRes({
                    status: 'success',
                    strength: ['Teamwork', 'Problem Solving', 'Good Work Ethic', 'Time Management'],
                })
            }
            if (req === 'weakness') {
                setRes({
                    status: 'error',
                    message: '404 not found',
                })
            }
            if (req === 'goal') {
                setRes({
                    status: 'success',
                    current_goal: 'Fullstack Developer',
                    future_goal: 'AR / VR Developer',
                })
            }
        }, 2000);
    }
    
    
    return (
        <Container className='w-[calc(100vw-22rem)] h-full'>
            <HeadingWrapper className='w-full flex items-center gap-x-12'>
                <div className='px-4'>
                    <h3 className='text-base font-normal cursor-pointer'>GET</h3>
                </div>
                <InputWrapper>
                    <p>https://services.saqyeah.com/api/{request}</p>
                </InputWrapper>
                <Button onClick={() => handleSend(request)}>SEND</Button>
            </HeadingWrapper>
            <Response>
                {
                    loading &&
                    <Loading>
                        {
                            theme.theme === 'neon' ?
                            <img src={LoaderNeon} alt='loader' className='w-32 h-32'/>
                            :
                            theme.theme === 'heal' ?
                            <img src={LoaderHeal} alt='loader' className='w-32 h-32'/>
                            :
                            <img src={LoaderCalm} alt='loader' className='w-32 h-32'/>
                        }
                    </Loading>  
                }
                <pre>{JSON.stringify(res, null, 4)}</pre>
            </Response>
        </Container>
    )
}

export default Shell