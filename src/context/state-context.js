import { createContext, useState } from "react"

export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [notePadOpen, setNotePadOpen] = useState(false);

    return (
        <StateContext.Provider value={{ notePadOpen, setNotePadOpen }}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;