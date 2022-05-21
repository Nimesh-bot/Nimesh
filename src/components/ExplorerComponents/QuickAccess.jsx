import React from 'react'
import Cards from '../Cards'
import Heading from '../Heading'
import { Revenue } from '../../components'
import { BsCardImage } from 'react-icons/bs'

const QuickAccess = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Quick Access' />
        <Cards src={Revenue} icon={<BsCardImage />} title='Task Tracker'/>
    </div>
  )
}

export default QuickAccess