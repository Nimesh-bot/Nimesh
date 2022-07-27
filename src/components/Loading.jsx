import React from 'react'
import Lottie from 'react-lottie'
import styled from 'styled-components'

import loadingAnimation from '../assets/lottie/coding.json'

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 10rem);
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.background};
`

const Loading = () => {
    const loadingOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <Container>
            <Lottie
                options={loadingOptions}
                height={200}
                width={200}
            />
        </Container>
    )
}

export default Loading