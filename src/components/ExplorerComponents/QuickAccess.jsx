import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { BsCardImage, BsCode } from 'react-icons/bs'

import { getAllDesigns, getAllProjects } from '../../redux/apiCalls'
import Cards from '../Cards'
import Heading from '../Heading'

const Block = styled.div`
  width: 15rem;
  height: 8rem;
  aspect-ratio: 16:9;
  border-radius: 6px;
  background-color: ${props => props.theme.body};
`

const QuickAccess = () => {
  const { projects, isFetching } = useSelector(state => state.projects);
  const { designs, isFetching: isFetchingDesigns } = useSelector(state => state.designs);

  const [randomNumber, setRandomNumber] = useState({
    projects: 0,
    designs: 0
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProjects(dispatch)
    getAllDesigns(dispatch)
  }, [dispatch])

  useEffect(() => {
    setRandomNumber({
      projects: Math.floor(Math.random() * projects.length),
      designs: Math.floor(Math.random() * designs.length)
    })
  }, [projects, designs])

  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Quick Access' />
        <div className="flex flex-wrap gap-4">
          {
            isFetching ?
            <Block className='animate-pulse'/>
            :
            <Cards 
              src={projects[randomNumber.projects]?.gallery[0]?.image} 
              icon={<BsCode />} 
              title={projects[randomNumber.projects]?.name} 
              clickEvent={() => navigate(`/viewer/project/${projects[randomNumber.projects]?._id}`)}
            />
          }

          {
            isFetchingDesigns ?
            <Block className='animate-pulse'/>
            :
            <Cards 
              src={designs[randomNumber.designs]?.gallery[0]?.image} 
              icon={<BsCardImage />} 
              title={designs[randomNumber.designs]?.name} 
              clickEvent={() => navigate(`/viewer/ui/${designs[randomNumber.designs]?._id}`)}
            />
          }
        </div>
    </div>
  )
}

export default QuickAccess