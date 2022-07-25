import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Container } from '../assets/Global'
import { FileExplorer } from '../components'
import { ThemeContext } from '../context/theme-context'
import AppBar from '../components/PersonalApiComponents/AppBar'
import AppBody from '../components/PersonalApiComponents/AppBody'

const PersonalApi = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate();

    return (
        <Container bg={`${theme.background}`} className='w-full px-16 py-4 flex flex-col gap-y-10'>
            <AppBar icon={FileExplorer} title="API HANDLER" handleClose={() => navigate('/desktop')}/>
            <AppBody />
        </Container>
    )
}

export default PersonalApi