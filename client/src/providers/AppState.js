import React, { useState } from 'react'

export const AppStateContext = React.createContext()
AppStateContext.displayName = 'App State Context'

export default function AppState({ children }) {
    const [isExpandOpen, setIsExpandOpen] = useState()
    const [selectedToggle, setSelectedToggle] = useState()

    return (
        <AppStateContext.Provider value={{ isExpandOpen, setIsExpandOpen, selectedToggle, setSelectedToggle}}>
            { children }
        </AppStateContext.Provider>
    )
}