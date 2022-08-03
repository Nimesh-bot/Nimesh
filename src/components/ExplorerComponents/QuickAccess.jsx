import React from 'react'
import Cards from '../Cards'
import Heading from '../Heading'
import { NewFlix, HMP } from '../../components'
import { BsCardImage, BsCode } from 'react-icons/bs'

const quickData = [
  {
    id: 1,
    title: 'NewFlix',
    icon: <BsCardImage />,
    src: NewFlix,
    link: 'https://dribbble.com/shots/17184221-Series-Streaming-App'
  },
  {
    id: 1,
    title: 'HMP',
    icon: <BsCode />,
    src: HMP,
    link: 'https://handlemypaper.com/'
  }
]


const QuickAccess = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Quick Access' />
        <div className="flex gap-x-4">
          {
            quickData.map((item, index) => (
              <a href={item.link} target="_blank" rel="noreferrer" key={index}>
                <Cards src={item.src} icon={<BsCardImage />} title={item.title} key={index}/>
              </a>
            ))
          }
        </div>
    </div>
  )
}

export default QuickAccess