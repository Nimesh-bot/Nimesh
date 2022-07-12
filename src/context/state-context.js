import { createContext, useState } from "react"

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [notePadOpen, setNotePadOpen] = useState(false);
    const [start, setStart] = useState(false);

    return (
        <StateContext.Provider value={{ notePadOpen, setNotePadOpen, start, setStart }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;