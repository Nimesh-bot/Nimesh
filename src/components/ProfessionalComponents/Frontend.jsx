import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import Heading from '../Heading'

import { BsCode } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { Ayuh, Digi, HMP, Lema, Omnivita, Uk, Vyakta } from '../../components'
import styledComponents from 'styled-components'

const frontData = [
    {
        id: 1,
        title: 'Handle My Paper',
        src: HMP,
    },
    {
        id: 2,
        title: 'Omnivita',
        src: Omnivita,
    },
    {
        id: 3,
        title: 'Digi School',
        src: Digi,
    },
    {
        id: 4,
        title: 'UK Colleges',
        src: Uk,
    },
    {
        id: 5,
        title: 'Ayuh',
        src: Ayuh,
    },
    {
        id: 6,
        title: 'Lemmatron Beta App',
        src: Lema,
    },
    {
        id: 7,
        title: 'Vyakta',
        src: Vyakta,
    },
]

const Text = styledComponents.p`
    color: ${props => props.theme.text};
`

const Frontend = () => {
  const items = frontData.length;
  const [data, setData] = useState(frontData)
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const totalItems = () => {
        if(items <= 5) {
            setData(frontData)
        }
        else{
            setData(frontData.slice(0,5))
        }
    }
    totalItems();
  }, [items])

  const handleExpand = (e) => {
    e.preventDefault()
    setExpand(!expand)
    if(expand){
        setData(frontData.slice(0,5))
    }
    else{
        setData(frontData)
    }
  }

  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Frontend Projects' />
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

export default Frontend