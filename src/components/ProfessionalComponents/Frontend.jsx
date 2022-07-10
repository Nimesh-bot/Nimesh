import React, { useState, useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'

import Cards from '../Cards'
import Heading from '../Heading'
import { frontData } from '../../assets/datas/projectData';

import { BsCode } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'


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

  const idRef = useRef({
    id: '',
  })
//   let navigate = useNavigate();

  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Frontend Projects' />
        <div className='flex flex-col gap-y-4'>
            <div className="flex gap-4 flex-wrap">
            {
                data.map((item, index) => (
                    <Cards 
                        src={item.src[0]} 
                        icon={<BsCode />} 
                        title={item.title} 
                        key={index} 
                        id={item.id} 
                        clickEvent={() => {
                            idRef.current.id = item.id
                            // navigate(`/viewer/${idRef.current.id}`)
                        }}
                    />
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