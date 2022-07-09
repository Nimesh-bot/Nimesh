import React, { useContext } from 'react'
import { Container } from '../assets/Global'
import Header from '../components/Header'
import { ThemeContext } from '../context/theme-context'
import { Disk } from '../components'
import styledComponents from 'styled-components'

const ContentWrapper = styledComponents.div`
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

const Viewer = () => {
  const { theme } = useContext(ThemeContext)
  const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  return (
    <Container bg={`${theme.body}`} className='w-full h-full px-16 py-4 flex flex-col gap-y-10'>
        <Header icon={Disk} title='Static'/>
        <Container bg={`${theme.background}`} className='w-full min-h-[calc(0.8*100vh)] max-h-auto rounded-md px-6 py-4 flex gap-y-12'>
            <div className='flex-1 flex flex-col gap-y-4'>
                <img src='https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg' alt="Windows" className="w-full h-auto rounded-md"/>
                <div className='flex gap-x-4'>
                    <img src="https://i.pinimg.com/474x/72/5b/d7/725bd76ad382836264120d8c9c5dd3ec.jpg" alt="Ss" className='w-56 h-28 rounded-md object-cover'/>
                    <img src="https://i.pinimg.com/474x/fb/38/5c/fb385cf680abaab941b2101557c806a5.jpg" alt="Ss" className='w-56 h-28 rounded-md object-cover'/>
                </div>
            </div>
            <div className='flex-1 px-8 flex flex-col gap-y-8'>
                <ContentWrapper className='flex flex-col gap-y-2'>
                    <h2 className='text-xl font-semibol'>Description</h2>
                    <p className='text-xs font-light'>{desc}</p>
                </ContentWrapper>
                <ContentWrapper className='flex flex-col gap-y-2'>
                    <h2 className='text-xl font-semibol'>Development</h2>
                    <div className='flex gap-x-2'>
                        <p className='text-xs font-light'>Language and Tools:</p>
                        <span className='text-xs font-light'>React Js, Node Js, Mongo</span>
                    </div>
                    <div className='flex gap-x-2'>
                        <p className='text-xs font-light'>Team Members:</p>
                        <span className='text-xs font-light'>Nimesh Shakya</span>
                    </div>
                </ContentWrapper>
                <ContentWrapper className='flex flex-col gap-y-2'>
                    <h2 className='text-xl font-semibol'>Visit Website</h2>
                    <span className='text-xs font-light cursor-pointer'>www.handlemypaper.com</span>
                </ContentWrapper>
            </div>
        </Container>
    </Container>
  )
}

export default Viewer