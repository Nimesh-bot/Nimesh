import React from 'react'
import styledComponents from 'styled-components'
import { ReactIcon, HTML, CSS, JS, TS, Tailwind, Styled, Mongo, Flutter, XD, PS } from '../../components'
import Heading from '../Heading'

const skillsData = [
    {
        id: 1,
        title: 'React Js',
        src: ReactIcon,
        percent: '75%',
    },
    {
        id: 2,
        title: 'HTML',
        src: HTML,
        percent: '95%',
    },
    {
        id: 3,
        title: 'CSS',
        src: CSS,
        percent: '88%',
    },
    {
        id: 4,
        title: 'Javascript',
        src: JS,
        percent: '70%',
    },
    {
        id: 5,
        title: 'Typescript',
        src: TS,
        percent: '40%',
    },
    {
        id: 6,
        title: 'Styled Components',
        src: Styled,
        percent: '80%',
    },
    {
        id: 7,
        title: 'Tailwind',
        src: Tailwind,
        percent: '60%',
    },
    {
        id: 8,
        title: 'Flutter',
        src: Flutter,
        percent: '20%',
    },
    {
        id: 9,
        title: 'MongoDB',
        src: Mongo,
        percent: '30%',
    },
    {
        id: 10,
        title: 'Adobe XD',
        src: XD,
        percent: '98%',
    },
    {
        id: 11,
        title: 'Photoshop',
        src: PS,
        percent: '60%',
    },
]

const Title = styledComponents.h4`
    color: ${props => props.theme.text};
`
const ProgressContainer = styledComponents.div`
    width: 100%;
    background-color: ${props => props.theme.body};
`
const ProgressBar = styledComponents.div`
    width: ${props => props.percent};
    height: 80%;
    background-color: ${props => props.theme.primary};
`

const Skills = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Skills' />
        <div className="flex gap-x-16 gap-y-8 flex-wrap items-center">
          {
            skillsData.map((item, index) => (
              <div className='w-52 flex gap-x-4 items-center' key={index}>
                <img src={item.src} className='w-12 h-12' alt={item.title} />
                <div className='w-full flex flex-col gap-y-2'>
                    <Title className='font-regular text-sm'>{item.title}</Title>
                    <ProgressContainer className='w-full h-4 rounded flex items-center'>
                        <ProgressBar percent={item.percent} className='rounded'/>
                    </ProgressContainer>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Skills