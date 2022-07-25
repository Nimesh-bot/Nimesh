import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Cards from '../Cards'

import { BsCode } from 'react-icons/bs'
import { Cosplay, Ecom, Harley, Hotel, NewFlix, Profile, Revenue, Trek } from '../../components'

const uiData = [
    {
        id: 1,
        title: 'NewFlix',
        src: NewFlix,
    },
    {
        id: 2,
        title: 'Trek',
        src: Trek,
    },
    {
        id: 3,
        title: 'Harley',
        src: Harley,
    },
    {
        id: 4,
        title: 'Hotel',
        src: Hotel,
    },
    {
        id: 5,
        title: 'Ecom',
        src: Ecom,
    },
    {
        id: 6,
        title: 'Tracking',
        src: Revenue,
    },
    {
        id: 7,
        title: 'Profile',
        src: Profile,
    },
    {
        id: 8,
        title: 'Vyakta',
        src: Cosplay,
    }
]

const Title = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`

const UI = () => {
  const [data, setData] = useState(uiData)

  useEffect(() => {
    setData(uiData)
  }, [])

  return (
    <div className='flex flex-col gap-y-8'>
        <Title>UI/UX Designs</Title>
        <div className='flex flex-col gap-y-4'>
            <div className="flex gap-4 flex-wrap">
            {
                data.map((item, index) => (
                    <Cards src={item.src} icon={<BsCode />} title={item.title} key={index}/>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default UI