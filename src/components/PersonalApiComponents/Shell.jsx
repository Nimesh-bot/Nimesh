import React, { useState } from 'react'
import styled from 'styled-components'
import Spiner from '../../assets/Icons/Spiner'

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

    h3 {
        flex-[0.5];
        color: ${props => props.theme.primary};
    }
`
const InputWrapper = styled.div`
    background-color: transparent;
    flex: 2;

    select {
        background-color: transparent;
        border: none;
        color: ${props => props.theme.text};
        font-size: 14px;
        font-weight: 300;

        option {
            color: ${props => props.theme.body};
        }
    }
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
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: relative;
    overflow: auto;
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

const api_options = [
    'who_am_i',
    'my_education',
    'my_hobbies',
    'profession',
    'experience',
    'strength',
    'weakness',
    'goal',
]

const Shell = ({ request }) => {
    const [loading, setLoading] = useState(false);

    const [res, setRes] = useState({ 
        message: 'Please make a request',
    })

    const [apiReq, setApiReq] = useState('who_am_i');

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
                    profession: 'Frontend Developer',
                    age: new Date().getMonth() > 5 ? new Date().getFullYear() - 2001 : new Date().getFullYear() - 2002,
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
                })
            }
            if (req === 'experience') {
                setRes({
                    status: 'success',
                    organizations: [
                        {
                            name: 'Kurma Tech',
                            position: 'UI/UX Designer Intern',
                            duration: 'August 2021 - October 2021',
                            contributions: 'Assisted in designing UI/UX for the website and mobile app. And also handled the social media of few clients.'
                        },
                        {
                            name: 'Bitmosys',
                            position: 'Frontend Developer',
                            duration: 'March 2022 - Present',
                            contributions: "Currently improving UI/UX of the websites and mobile apps."
                        },
                        {
                            name: 'Softed',
                            position: 'Frontend Developer Intern',
                            duration: 'April 2022 - July 2022',
                            contributions: "Contributed in creating minimalistic static websites for Uk Colleges Nepal (Web has been updated as of 2023)."
                        },
                        {
                            name: 'Sunway College Kathmandu',
                            position: 'Frontend Developer and UI Designer',
                            duration: 'August 2022 - February 2023',
                            contributions: "Improved UI/UX of the website and mobile app. Also worked on the frontend of the few websites."
                        },
                        {
                            name: 'Ayata Incorporation',
                            position: 'Frontend Developer',
                            duration: 'February 2023 - April 2023',
                            contributions: "Fixed bugs of ongoing projects and improved the performance of the webapp by working on feature to upload videos asynchronously without freezing the UI."
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
                    status: 'success',
                    weakness: ['Prone to Sickness', 'Hot Headed', 'May sometimes jump to conclusions'],
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
        <Container className='w-full lg:w-[calc(100vw-22rem)] h-full'>
            <HeadingWrapper className='w-full h-auto md:h-14 flex flex-col md:flex-row items-center gap-y-4 gap-x-12'>
                <div className='px-4'>
                    <h3 className='text-base font-normal cursor-pointer'>GET</h3>
                </div>
                <InputWrapper className='hidden lg:flex'>
                    <p>https://services.saqyeah.com/api/{request}</p>
                </InputWrapper>
                <InputWrapper className='lg:hidden flex items-center'>
                    <p>https://services.saqyeah.com/api/</p>
                    <select onChange={(e) => setApiReq(e.target.value)}>
                        {
                            api_options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))
                        }
                    </select>
                </InputWrapper>
                <Button onClick={() => handleSend(request)} className='hidden lg:flex'>SEND</Button>
                <Button onClick={() => handleSend(apiReq)} className='lg:hidden'>SEND</Button>
            </HeadingWrapper>
            <Response>
                {
                    loading &&
                    <Loading>
                        <Spiner />
                    </Loading>  
                }
                <pre className='whitespace-pre-wrap'>{JSON.stringify(res, null, 4)}</pre>
            </Response>
        </Container>
    )
}

export default Shell