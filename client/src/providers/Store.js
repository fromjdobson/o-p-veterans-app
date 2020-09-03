import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function Store({ children }) {
    const [appState, setAppState] = useState({userLoggedIn: false, isAdmin: false})
    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            {children}
        </AppStateContext.Provider>
    )
}