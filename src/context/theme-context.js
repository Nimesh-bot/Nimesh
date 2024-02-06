import { createContext, useState } from "react";
import { SoftwareDeveloper } from "../components";
import { themes } from "./Themes";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.heal);

  const [wallpaper, setWallpaper] = useState(SoftwareDeveloper);

  const [viewerDetails, setViewerDetails] = useState({
    name: "",
    icon: "",
    id: "",
    gallery: [],
    desc: "",
    lang: "",
    team: "",
    link: "",
  });

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        wallpaper,
        setWallpaper,
        viewerDetails,
        setViewerDetails,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
