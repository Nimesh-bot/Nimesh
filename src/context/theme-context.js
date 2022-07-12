import { createContext, useState } from "react"
import { themes } from "./Themes";
import { AnimeHoodie } from "../components";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.neon);
    
    const [wallpaper, setWallpaper] = useState(AnimeHoodie);

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