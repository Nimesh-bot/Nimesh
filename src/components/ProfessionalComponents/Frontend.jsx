import React, { useEffect, useRef, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Cards from '../Cards'

import { BsCode } from 'react-icons/bs'
import { getAllProjects } from '../../redux/apiCalls';
import { ThemeContext } from '../../context/theme-context';

const Title = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`

const Frontend = () => {
  const { theme } = useContext(ThemeContext);
  const { projects, isFetching } = useSelector(state => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProjects(dispatch);      
  }, [dispatch]);

  const idRef = useRef({
    id: '',
  })

  return (
    <div className='flex flex-col gap-y-8'>
        <Title>Frontend Projects</Title>
        <div className='flex flex-col gap-y-4'>
            <div className="flex gap-4 flex-wrap">
              {
                isFetching ?
                <div className='w-52 flex gap-x-4 items-center animate-pulse'>
                    <div className='w-12 h-16 rounded' style={{backgroundColor: `${theme.body}`}}></div>
                </div>
                :
                <>
                  {
                      projects.map((item, index) => (
                          <Cards 
                              src={item.gallery[0].image} 
                              icon={<BsCode />} 
                              title={item.name} 
                              key={index} 
                              id={item.id} 
                              clickEvent={() => {
                                  idRef.current.id = item.id
                                  // navigate(`/viewer/${idRef.current.id}`)
                              }}
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