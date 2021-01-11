import React, { useState } from 'react'

export const AppStateContext = React.createContext()
AppStateContext.displayName = 'App State Context'

export default function AppState({ children }) {
    const [isExpandOpen, setIsExpandOpen] = useState(false)
    const [selectedToggle, setSelectedToggle] = useState('vendor')

    return (
        <AppStateContext.Provider value={{expand: [isExpandOpen, setIsExpandOpen], toggle: [selectedToggle, setSelectedToggle]}}>
            { children }
        </AppStateContext.Provider>
    )
}