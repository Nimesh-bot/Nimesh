import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.section`
    background-color: ${props => props.theme.body};

    p{
        color: ${props => props.theme.primary}
    }
    h6{
        color: ${props => props.theme.primary}
    }
`

const Construction = () => {
  return (
    <Container className='lg:hidden w-full h-screen flex flex-col justify-center items-center gap-y-8'>
        <img 
            src='https://img.wattpad.com/37aea72b643e803e1cfff1303def4014321e9578/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f31426f4d4d3337494e52637636513d3d2d3732303534323735352e313539363235333733653332336563353632353633353138313033322e676966' 
            alt='Working' 
            className='w-56 h-56 mix-blend-overlay'
        />
        <div>
            <p className='text-sm px-4 text-center font-light'>Currently working on desktop mode</p>
            <h6 className='text-xl px-4 text-center font-black'>MOBILE APP COMING SOON</h6>
        </div>
    </Container>
  )
}

export default Construction