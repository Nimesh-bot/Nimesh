import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { ThemeContext } from '../../context/theme-context'
import { getAllSkills } from '../../redux/apiCalls'

const Head = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`
const Title = styled.h4`
    color: ${props => props.theme.text};
`
const ProgressContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.body};
`
const ProgressBar = styled.div`
    width: ${props => props.percent}%;
    height: 80%;
    background-color: ${props => props.theme.primary};
`

const Skills = () => {
    const { theme } = useContext(ThemeContext);
    const { skills, isFetching } = useSelector(state => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllSkills(dispatch);
        console.log(skills);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <div className='flex flex-col gap-y-8'>
            <Head>Skills</Head>
            
            <div className="flex gap-x-16 gap-y-8 flex-wrap items-center mb-8">
            {
                isFetching ?
                <div className='w-52 flex gap-x-4 items-center animate-pulse'>
                    <div className='w-12 h-12 rounded-full' style={{backgroundColor: `${theme.body}`}}></div>
                    <div className='w-full flex flex-col gap-y-2'>
                        <div className='w-1/3 h-4 rounded' style={{backgroundColor: `${theme.body}`}} />
                        <div className='w-full h-4 rounded' style={{backgroundColor: `${theme.body}`}} />
                    </div>
                </div>
                :
                <>
                    {
                        skills.map((item, index) => (
                        <div className='w-52 flex gap-x-4 items-center' key={index}>
                            <img src={item.icon} className='w-12 h-12' alt={item.name} />
                            <div className='w-full flex flex-col gap-y-2'>
                                <Title className='font-regular text-base'>{item.name}</Title>
                                <ProgressContainer className='w-full h-4 rounded flex items-center'>
                                    <ProgressBar percent={item.percentage} className='rounded'/>
                                </ProgressContainer>
                            </div>
                        </div>
                        ))
                    }
                </>
            }
            </div>
        </div>
    )
}

export default Skills