import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';

import { Toaster, toast } from 'react-hot-toast';
import Draggable from 'react-draggable';

import { postContactFailure, postContactStart, postContactSuccess } from '../../redux/features/hiremeSlice';

import { IoIosClose } from 'react-icons/io'
import { StateContext } from '../../context/state-context'
import axiosInstance from '../../utils/axios.config';

const Container = styled.div`
    height: 60vh;
    position: absolute;
    top: 20%;
    left: 30%;
    display: flex;
    flex-direction: column;
    z-index: 90;
`
const HeadingBar = styled.div`
    width: 100%;
    min-height: 3rem;
    background-color: ${props => props.theme.body};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px 8px 0 0;

    h3 {
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
const Content = styled.form`
    width: 100%;
    height: calc(60vh-3rem);
    padding: 2rem;
    background-color: ${props => props.theme.background};
    border: 0.5px solid ${props => props.theme.neutral}25;
    border-radius: 0 0 8px 8px;

    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        gap: 0.5rem;

        label {
            font-size: 12px;
            color: ${props => props.theme.fade};
        }   

        input {
            width: 100%;
            background-color: transparent;
            color: ${props => props.theme.text};
            border: none;
            font-size: 14px;
    
            &:focus {
                outline: none;
                border: none;
            }
        }
        textarea {
            width: 100%;
            min-height: 25vh;
            max-height: calc(60vh - 12rem);
            background-color: transparent;
            color: ${props => props.theme.text};
            border: none;
            font-size: 14px;
    
            &:focus {
                outline: none;
                border: none;
            }
        }
    }
    button {
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.primary}15;
        padding: 0.5rem 1.5rem;
        border-radius: 4px;

        &:disabled {
            cursor: none;
            background-color: transparent;
            padding: 0.5rem 0;
        }
    }
` 
const Loader = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border-top: 3px solid ${props => props.theme.primary};
  border-left: 3px solid ${props => props.theme.primary};
  border-right: 3px solid ${props => props.theme.primary}00;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  animation: spin 0.5s linear infinite;
`

const Span = styled.span`
    font-size: 12px;
    color: ${props => props.error ? '#FF1E00' : props.theme.primary};
    margin-left: 1rem;
`


const HireForm = () => {
    const { isFetching } = useSelector(state => state.contact)

    const { setHireOpen } = useContext(StateContext)
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const [validationError, setValidationError] = useState({
        email: false,
        subject: false,
        text: false,
        validEmail: false,
    });

    useEffect(() => {
        //focus on email input
        document.getElementById('email').focus();
    }, [])

    const dispatch = useDispatch();

    const isValidEmail = (emailAddress) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
    }

    const handleMail = async (e) => {
        e.preventDefault();
        if (email === '' && subject === '' && text === '') {
            setValidationError({ validEmail: false, email: true, subject: true, text: true })
        } 
        else if (email === '') {
            setValidationError({ validEmail: false, email: true, subject: false, text: false })
        }
        else if (subject === '') {
            setValidationError({ validEmail: false, email: false, subject: true, text: false })
        }
        else if (text === '') {
            setValidationError({ validEmail: false, email: false, subject: false, text: true })
        }
        else if (!isValidEmail(email)) {
            setValidationError({ validEmail: true, email: false, subject: false, text: false })
        }
        else {
            setValidationError({ validEmail: false, email: false, subject: false, text: false })
            dispatch(postContactStart());
            try {
                await axiosInstance.post('/hireme', { email, subject, text });
                dispatch(postContactSuccess());
                setEmail('');
                setSubject('');
                setText('');
                toast.success('Email Sent!', {
                    style: {
                        background: `${props => props.theme.body}`,
                        color: `${props => props.theme.text}`,
                    },
                })
            }
            catch(err) {
                dispatch(postContactFailure());
            }
        }
    }

    return (
        <Draggable>
            <Container className='w-2/3 lg:w-1/3'>
                <HeadingBar>
                    <h3>Hire Me</h3>
                    <div onClick={() => setHireOpen(false)}>
                        <IoIosClose className='text-[27px]'/>
                    </div>
                </HeadingBar>
                <Content>
                    <div>
                        <label>
                            Your Email 
                            <Span error={true}>
                                {
                                    validationError.email ? '*' : validationError.validEmail ? 'Invalid Email' : ''
                                }
                            </Span>
                        </label>
                        <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} id='email'/>
                    </div>
                    <div>
                        <label>
                            Subject
                            <Span error={true}>
                                {
                                    validationError.subject && '*'
                                }
                            </Span>
                        </label>
                        <input value={subject} type='text' onChange={(e) => setSubject(e.target.value)} id='subject'/>
                    </div>
                    <div>
                        <label>
                            Body
                            <Span error={true}>
                                {
                                    validationError.text && '*'
                                }
                            </Span>
                        </label>
                        <textarea value={text} type='text' onChange={(e) => setText(e.target.value)} id='body'/>
                    </div>

                    <button disabled={isFetching} onClick={handleMail}>
                        {
                            isFetching ? 
                            <Loader />
                            :
                            <span>
                                SEND
                            </span>
                        }
                    </button>
                </Content>
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
            </Container>
        </Draggable>
    )
}

export default HireForm