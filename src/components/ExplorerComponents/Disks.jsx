import React from 'react'
import Heading from '../Heading'
import { Disk } from '../../components'
import styledComponents from 'styled-components'
import { useNavigate } from 'react-router-dom'

const DiskWrapper = styledComponents.div`
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    width: auto;
    height: auto; 
    border-radius: 4px;

    &:hover {
        background-color: ${props => props.theme.text}20;
    }
`
const Title = styledComponents.h3`
    color: ${props => props.theme.text};
    font-size: 0.875rem;
    font-weight: 500;

    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
const Text = styledComponents.p`
    color: ${props => props.theme.fade};
    font-size: 0.75rem;
    font-weight: 300;

    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`

const Disks = () => {
    let navigate = useNavigate();
    
    return (
        <div className='flex flex-col gap-y-8'>
            <Heading title='Partitions' />
            <div className="flex flex-wrap gap-8 md:gap-16">
                <DiskWrapper className='flex gap-x-4 items-center' onDoubleClick={() => navigate('/explorer/personal')}>
                    <img src={Disk} alt="C Drive" className='w-auto h-12'/>
                    <div className='flex flex-col'>
                        <Title>Personal Information (C:)</Title>
                        <Text>Academy, Hobbies and Interests</Text>
                    </div>
                </DiskWrapper>        
                <DiskWrapper className='flex gap-x-4 items-center' onDoubleClick={() => navigate('/explorer/professional')}>
                    <img src={Disk} alt="D Drive" className='w-auto h-12'/>
                    <div className='flex flex-col '>
                        <Title>Professional Information (D:)</Title>
                        <Text>Works, Contributions, Achievements and Skills</Text>
                    </div>
                </DiskWrapper>        
            </div>
        </div>
    )
}

export default Disks