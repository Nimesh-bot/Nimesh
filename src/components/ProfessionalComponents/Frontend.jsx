import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import Heading from '../Heading'

import { BsCode } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import { Ayuh, Digi, HMP, Lema, Omnivita, Uk, Vyakta } from '../../components'
import styledComponents from 'styled-components'
import { useNavigate } from 'react-router-dom'

const frontData = [
    {
        id: 1,
        title: 'Handle My Paper',
        src: [HMP, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: 'www.handlemypaper.com',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 2,
        title: 'Omnivita',
        src: [Omnivita, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: '#',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 3,
        title: 'Digi School',
        src: [Digi, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: 'www.digischool.netlify.app',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 4,
        title: 'UK Colleges',
        src: [Uk, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: 'beta.theukcolleges.com',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 5,
        title: 'Ayuh',
        src: [Ayuh, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: 'www.ayuh.netlify.app',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 6,
        title: 'Lemmatron Beta App',
        src: [Lema, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: 'www.lemmatron-app-beta.netlify.app',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 7,
        title: 'Vyakta',
        src: [Vyakta, 'https://i.pinimg.com/474x/c6/fd/5f/c6fd5f521f3af710cea4659fa41bc4e3.jpg', 'https://i.pinimg.com/474x/07/e2/5a/07e25a4c8c95d78d70e4f8aa2e6468f6.jpg'],
        link: 'www.vyakta.netlify.app',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
]

const Text = styledComponents.p`
    color: ${props => props.theme.text};
`

const Frontend = () => {
  const items = frontData.length;
  const [data, setData] = useState(frontData)
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    const totalItems = () => {
        if(items <= 5) {
            setData(frontData)
        }
        else{
            setData(frontData.slice(0,5))
        }
    }
    totalItems();
  }, [items])

  const handleExpand = (e) => {
    e.preventDefault()
    setExpand(!expand)
    if(expand){
        setData(frontData.slice(0,5))
    }
    else{
        setData(frontData)  
    }
  }

  let navigate = useNavigate();
  const handleViewer = (e) => {
    navigate('/viewer');
  }

  return (
    <div className='flex flex-col gap-y-8'>
        <Heading title='Frontend Projects' />
        <div className='flex flex-col gap-y-4'>
            <div className="flex gap-4 flex-wrap">
            {
                data.map((item, index) => (
                    <Cards src={item.src[0]} icon={<BsCode />} title={item.title} key={index} clickEvent={handleViewer}/>
                ))
            }
            </div>
            {
                items > 5 &&
                <>
                    {
                        !expand ?
                        <Text className='text-base font-light flex gap-x-2 mx-auto items-center cursor-pointer hover:scale-105' onClick={handleExpand}>Expand <span><MdExpandMore className='w-5 h-5'/></span></Text>
                        :
                        <Text className='text-base font-light flex gap-x-2 mx-auto items-center cursor-pointer hover:scale-105' onClick={handleExpand}>Collapse <span><MdExpandMore className='w-5 h-5 rotate-180'/></span></Text>
                    }
                </>
            }
        </div>
    </div>
  )
}

export default Frontend