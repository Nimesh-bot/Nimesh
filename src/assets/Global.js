import styledComponents from "styled-components";

export const Container = styledComponents.div`
    background-color: ${props => props.bg};

    &::webkit-scrollbar {
        width: 0.5em;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::webkit-scrollbar-thumb {
        background-color: transparent;
        background: ${props => props.theme.background};
    }
    &::webkit-scroll-thumb:hover{
        background: ${props => props.theme.bg};
    }

    @supports (scrollbar-color: red blue) {
        &::-webkit-scrollbar-thumb {
            scrollbar-color: ${props => props.theme.background} transparent;
            scrollbar-width: thin;
        }
    }
`