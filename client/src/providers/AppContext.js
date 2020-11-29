import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function AppContext({ children }) {
    const [appState, setAppState] = useState()

    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            { children }
        </AppStateContext.Provider>
    )
}