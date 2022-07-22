import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styledComponents from 'styled-components'

import { ThemeContext } from '../../context/theme-context'
import { getAllSkills } from '../../redux/apiCalls'
import Heading from '../Heading'

const Title = styledComponents.h4`
    color: ${props => props.theme.text};
`
const ProgressContainer = styledComponents.div`
    width: 100%;
    background-color: ${props => props.theme.body};
`
const ProgressBar = styledComponents.div`
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
            <Heading title='Skills' />
            
            <div className="flex gap-x-16 gap-y-8 flex-wrap items-center">
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