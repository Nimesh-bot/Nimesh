import React from 'react'
import Cards from '../Cards'

import { GoOrganization } from 'react-icons/go'
import { Kurma, Bitmosys, SoftED } from '../../components'
import styled from 'styled-components'

const orgData = [
    {
        id: 1,
        title: 'Kurma Tech',
        src: Kurma,
    },
    {
        id: 2,
        title: 'Bitmosys',
        src: Bitmosys,
    },
    {
        id: 1,
        title: 'SoftED Group',
        src: SoftED,
    },
]

const Title = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`

const Organizations = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <Title>Organizations Worked For</Title>
        <div className="flex gap-x-4">
          {
            orgData.map((item, index) => (
              <Cards src={item.src} icon={<GoOrganization />} title={item.title} key={index}/>
            ))
          }
        </div>
    </div>
  )
}

export default Organizations