import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.text};
        font-family: 'Poppins', sans-serif;
    }
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 27px;
        font-weight: 700;
    }
    h3{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
    }
    p{
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 300;
    }
`