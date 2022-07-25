import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`
const Line = styled.div`
    background-color: ${props => props.theme.primary}
`

const Heading = ({title}) => {
  return (
    <div className='flex gap-x-4 justify-between items-center'>
        <Title className='w-fit text-base font-light'>{title}</Title>
        <Line className='flex-grow h-[1px]'/>
    </div>
  )
}

export default Heading