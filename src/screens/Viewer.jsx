import React, { useContext, useState } from 'react'
import { Container } from '../assets/Global'
import Header from '../components/Header'
import { ThemeContext } from '../context/theme-context'
import { Disk } from '../components'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { frontData } from '../assets/datas/projectData'

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
const Gallery = styled.img`
    filter: ${props => props.selected ? 'grayscale(1)' : 'grayscale(0)'};
`

const Viewer = () => {
    const { id } = useParams();
    const { theme } = useContext(ThemeContext)
    
    const [data, setData] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const project = frontData.find(item => item.id === id);
    console.log(project)
    setData(project);
    
    return (
        <Container bg={`${theme.body}`} className='w-full h-full px-16 py-4 flex flex-col gap-y-10'>
            <Header icon={Disk} title={data.title}/>
            <Container bg={`${theme.background}`} className='w-full min-h-[calc(0.8*100vh)] max-h-auto rounded-md px-6 py-4 flex gap-y-12'>
                <div className='flex-1 flex flex-col gap-y-4'>
                    <img src={selectedImage} alt="Windows" className="w-full h-auto rounded-md"/>
                    <div className='flex gap-x-4'>
                        {
                            data.src.map((item, index) => (
                                <Gallery 
                                    src={item} 
                                    alt="Ss" 
                                    className='w-56 h-28 rounded-md object-cover' 
                                    key={index}
                                    selected={selectedImage === item}
                                    onClick={() => setSelectedImage(item)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='flex-1 px-8 flex flex-col gap-y-8'>
                    <ContentWrapper className='flex flex-col gap-y-2'>
                        <h2 className='text-xl font-semibol'>Description</h2>
                        <p className='text-xs font-light'>{data.desc}</p>
                    </ContentWrapper>
                    <ContentWrapper className='flex flex-col gap-y-2'>
                        <h2 className='text-xl font-semibol'>Development</h2>
                        <div className='flex gap-x-2'>
                            <p className='text-xs font-light'>Language and Tools:</p>
                            <span className='text-xs font-light'>{data.lang}</span>
                        </div>
                        <div className='flex gap-x-2'>
                            <p className='text-xs font-light'>Team Members:</p>
                            <div className='flex gap-x-4 text-xs font-light'>
                                {
                                    data.team.map((item, index) => (
                                        <span onClick={() => window.open(item.github)} key={index}>{item.name}</span>
                                    ))
                                }
                            </div>
                        </div>
                    </ContentWrapper>
                    <ContentWrapper className='flex flex-col gap-y-2'>
                        <h2 className='text-xl font-semibol'>Visit Website</h2>
                        <span className='text-xs font-light cursor-pointer'>{data.link}</span>
                    </ContentWrapper>
                </div>
            </Container>
        </Container>
    )
}

export default Viewer