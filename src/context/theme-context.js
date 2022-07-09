import { createContext, useState } from "react"
import AnimeHoodie from '../assets/Wallpapers/anime_hoodie.jpg'
import { themes } from "./Themes";

export const ThemeContext = createContext();

export const bg_image = AnimeHoodie

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.neon);
    const [wallpaper, setWallpaper] = useState(bg_image);

    const [viewerDetails, setViewerDetails] = useState({
        name: '',
        icon: '',
        id: '',
        gallery: [],
        desc: '',
        lang: '',
        team: '',
        link: '',
    })

    return (
        <ThemeContext.Provider value={{ theme, setTheme, wallpaper, setWallpaper, viewerDetails, setViewerDetails }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;