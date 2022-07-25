import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'

import Cards from '../Cards'

import { BsCode } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDesigns } from '../../redux/apiCalls'
import { ThemeContext } from '../../context/theme-context'

const Title = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 16px;
  font-weight: 400;
`

const UI = () => {
  const { theme } = useContext(ThemeContext);
  const { designs, isFetching } = useSelector(state => state.designs);

  const dispatch = useDispatch();
  useEffect(() => {
    getAllDesigns(dispatch);
  }, [dispatch]);

  return (
    <div className='flex flex-col gap-y-8'>
        <Title>UI/UX Designs</Title>
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
                            designs.map((item, index) => (
                                <Cards 
                                    src={item.gallery[0].image} 
                                    icon={<BsCode />} 
                                    title={item.name} 
                                    key={index}
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

export default UI