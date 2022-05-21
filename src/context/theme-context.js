import { createContext, useState } from "react"
import AnimeHoodie from '../assets/Wallpapers/anime_hoodie.jpg'

export const ThemeContext = createContext();

export const themes = {
    neon: {
        primary: '#F73D93',
        secondary: '#cc337a',
        body: '#251D3A',
        text: '#eeeeee',
        background: '#332D44',
        fade: '#ACACAC',
    },
    heal: {
        primary: '#3ef6a1',
        secondary: '#3ef6a1',
        body: '#2C272E',
        text: '#eeeeee',
    },
    calm: {
        primary: '#42C2FF',
        secondary: '#85F4FF',
        body: '#EFFFFD',
        text: '#0E185F',
    }
}

export const bg_image = AnimeHoodie

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.neon);
    const [wallpaper, setWallpaper] = useState(bg_image);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, wallpaper, setWallpaper }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;