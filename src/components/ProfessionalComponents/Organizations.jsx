import React from 'react'
import Cards from '../Cards'
import Heading from '../Heading'

import { GoOrganization } from 'react-icons/go'
import { Kurma, Bitmosys, SoftED } from '../../components'

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

const Organizations = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Organizations Worked For' />
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