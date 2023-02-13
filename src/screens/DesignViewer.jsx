import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { Container } from '../assets/Global'
import Header from '../components/Header'
import Loading from '../components/Loading'

import { FaHandPointRight } from 'react-icons/fa'

import { Disk } from '../components'
import { ThemeContext } from '../context/theme-context'
import { getSelectedDesign } from '../redux/apiCalls'

const Gallery = styled.img`
    filter: ${props => props.selected ? 'brightness(0.5)' : 'brightness(1)'};
`
const ContentWrapper = styled.div`
    h2{
        color: ${props => props.theme.text};
    }
    p{
        color: ${props => props.theme.fade};
    }
    span{
        color: ${props => props.theme.primary};
    }
`
const Icon = styled.div`
    font-size: 18px;
    color: ${props => props.theme.primary};
`
const Span = styled.p`
    color: ${props => props.theme.text};
`

const DesignViewer = () => {
    const { id } = useParams();
    const { theme } = useContext(ThemeContext);
    const { design_description, isFetching } = useSelector(state => state.designs);

    const [selectedImage, setSelectedImage] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        getSelectedDesign(dispatch, id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    useEffect(() => {
        const display_image = design_description?.gallery[0]?.image;

        setSelectedImage(display_image);
    }, [design_description])

    const navigate = useNavigate();

    return (
        <Container bg={`${theme.body}`} className='w-full h-full px-4 lg:px-16 py-4 flex flex-col gap-y-10'>
            <Header icon={Disk} title={design_description?.name} handleClose={() => navigate(-1)}/>

            {
                isFetching ?
                <Loading height='calc(100vh - 10.5rem)'/>
                :
                <Container bg={`${theme.background}`} className='w-full h-[calc(100vh-10.5rem)] max-h-auto rounded-md p-8 flex flex-col lg:flex-row gap-y-12 overflow-scroll'>
                    <div className='w-full lg:w-2/5 flex-col gap-8'>
                        <img src={selectedImage} alt="Main" className="flex-1 aspect-video rounded-md mb-2"/>
                        <div className='flex gap-4 overflow-auto'>
                            {
                                design_description?.gallery?.map((item, index) => (
                                    <Gallery 
                                        src={item.image} 
                                        alt="Ss" 
                                        className='w-40 aspect-video rounded-md object-cover' 
                                        key={index}
                                        selected={selectedImage === item.image}
                                        onClick={() => setSelectedImage(item.image)}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex-1 lg:px-8 flex flex-col gap-y-8'>
                        <ContentWrapper className='flex flex-col gap-y-2'>
                            <h2 className='text-xl font-semibol'>Description</h2>
                            <p className='text-xs font-light'>{design_description?.description}</p>
                        </ContentWrapper>
                        <ContentWrapper className='flex flex-col gap-y-2'>
                            <h2 className='text-xl font-semibol'>Tools Used</h2>
                            {
                                design_description?.tools?.map((item, index) => (
                                    <div className='ml-4 flex gap-x-2 items-center' key={index}>
                                        <Icon>
                                            <FaHandPointRight />
                                        </Icon>
                                        <Span className='text-xs font-light'>{item}</Span>
                                    </div>
                                ))

                            }
                        </ContentWrapper>
                        
                        <ContentWrapper className='flex flex-col gap-y-2'>
                            <h2 className='text-xl font-semibol'>Dribbble</h2>
                            <span className='text-xs font-light cursor-pointer'>{design_description?.url}</span>
                        </ContentWrapper>
                    </div>
                </Container>
                // <>
                //     <p>Hello</p>
                // </>
            }

        </Container>
    )
}

export default DesignViewer