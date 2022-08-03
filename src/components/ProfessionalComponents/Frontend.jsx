import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Cards from '../Cards'

import { BsCode } from 'react-icons/bs'
import { getAllProjects } from '../../redux/apiCalls';
import { ThemeContext } from '../../context/theme-context';
import { useNavigate } from 'react-router-dom';

const Title = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`

const Frontend = () => {
  const { theme } = useContext(ThemeContext);
  const { projects } = useSelector(state => state.projects);
  const { isFetching } = useSelector(state => state.projects);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getAllProjects(dispatch);   
  }, [dispatch]); 

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/viewer/project/${id}`);
  }

  return (
    <div className='flex flex-col gap-y-8'>
        <Title>Frontend Projects</Title>
        <div className='flex flex-col gap-y-4'>
            <div className="flex gap-4 flex-wrap">
              {
                isFetching ?
                <>
                  {
                    [0, 1, 2, 3].map(index => (
                      <div className='h-32 aspect-video flex gap-x-4 items-center animate-pulse' key={index}>
                          <div className='w-full h-full rounded' style={{backgroundColor: `${theme.body}`}}></div>
                      </div>
                    ))
                  }
                </>
                :
                <>
                  {
                      projects?.map((item, index) => (
                          <Cards 
                              src={item.gallery[0].image} 
                              icon={<BsCode />} 
                              title={item.name} 
                              key={index} 
                              id={item._id} 
                              clickEvent={() => handleNavigate(item._id)}
                          />
                      ))
                  }
                </>
              }
            </div>
        </div>
    </div>
  )
}

export default Frontend