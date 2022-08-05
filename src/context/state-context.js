import { createContext, useState } from "react"

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [notePadOpen, setNotePadOpen] = useState(false);
    const [hireOpen, setHireOpen] = useState(false);
    const [start, setStart] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});

    const [loadingCount, setLoadingCount] = useState(0);

    return (
        <StateContext.Provider value={{ notePadOpen, setNotePadOpen, start, setStart, hireOpen, setHireOpen, selectedProject, setSelectedProject, loadingCount, setLoadingCount }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;