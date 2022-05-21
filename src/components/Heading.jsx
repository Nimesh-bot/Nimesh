import React from 'react'
import styledComponents from 'styled-components'

const Title = styledComponents.h3`
    color: ${props => props.theme.primary}
`
const Line = styledComponents.div`
    background-color: ${props => props.theme.primary}
`

const Heading = ({title}) => {
  return (
    <div className='flex gap-x-4 justify-between items-center'>
        <Title className='w-fit text-sm font-light'>{title}</Title>
        <Line className='flex-grow h-[1px]'/>
    </div>
  )
}

export default Heading