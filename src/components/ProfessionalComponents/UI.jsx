import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import Heading from '../Heading'

import { BsCode } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { Cosplay, Ecom, Harley, Hotel, NewFlix, Profile, Revenue, Trek } from '../../components'
import styledComponents from 'styled-components'

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

const Text = styledComponents.p`
    color: ${props => props.theme.text};
`

const UI = () => {
  const items = uiData.length;
  const [data, setData] = useState(uiData)
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const totalItems = () => {
        if(items <= 5) {
            setData(uiData)
        }
        else{
            setData(uiData.slice(0,5))
        }
    }
    totalItems();
  }, [items])

  const handleExpand = (e) => {
    e.preventDefault()
    setExpand(!expand)
    if(expand){
        setData(uiData.slice(0,5))
    }
    else{
        setData(uiData)
    }
  }

  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='UI/UX Designs' />
        <div className='flex flex-col gap-y-4'>
            <div className="flex gap-4 flex-wrap">
            {
                data.map((item, index) => (
                    <Cards src={item.src} icon={<BsCode />} title={item.title} key={index}/>
                ))
            }
            </div>
            {
                items > 5 &&
                <>
                    {
                        !expand ?
                        <Text className='text-base font-light flex gap-x-2 mx-auto items-center cursor-pointer hover:scale-105' onClick={handleExpand}>Expand <span><MdExpandMore className='w-5 h-5'/></span></Text>
                        :
                        <Text className='text-base font-light flex gap-x-2 mx-auto items-center cursor-pointer hover:scale-105' onClick={handleExpand}>Collapse <span><MdExpandMore className='w-5 h-5 rotate-180'/></span></Text>
                    }
                </>
            }
        </div>
    </div>
  )
}

export default UI