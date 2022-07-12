import React, { useState, useEffect, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'

import Cards from '../Cards'
import Heading from '../Heading'
import { frontData } from '../../assets/datas/projectData';

import { BsCode } from 'react-icons/bs'

const Frontend = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(frontData)      
  }, [])

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
        </div>
    </div>
  )
}

export default Frontend