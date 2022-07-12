import React from 'react'
import styled from 'styled-components'

import { GithubIcon, LinkedinIcon, DiscordIcon, InstagramIcon, DribbbleIcon } from '..'

const SocialIcons = [
    {   
        _id: '01',
        name: 'Github',
        icon: GithubIcon,
        link: 'https://github.com/Nimesh-bot' 
    },
    {
        _id: '02',
        name: 'Linkedin',
        icon: LinkedinIcon,
        link: 'https://www.linkedin.com/in/nimesh-shakya-4966451b6/'
    },
    {
        _id: '03',
        name: 'Discord',
        icon: DiscordIcon,
        link: 'https://discord.com/users/501405776305192980/'
    },
    {
        _id: '04',
        name: 'Instagram',
        icon: InstagramIcon,
        link: 'https://www.instagram.com/knee_mesh/'
    },
    {
        _id: '05',
        name: 'Dribbble',
        icon: DribbbleIcon,
        link: 'https://dribbble.com/Saq-Yeah'
    },
]

const Container = styled.div`
    width: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    border-right: 1px solid ${props => props.theme.primary};
`

const Links = () => {
  return (
    <Container>
        {
            SocialIcons.map((item, index) => (
                <img 
                    src={item.icon} 
                    alt={item.name} 
                    key={index} 
                    className="w-8 h-8"
                    onClick={() => window.open(item.link, '_blank')}
                />
            ))
        }
    </Container>
  )
}

export default Links