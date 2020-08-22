import React, { useState } from 'react'

export const AppStatusContext = React.createContext()

export default function Store({children}) {
    const [appStatus, setAppStatus] = useState('It is going')
    return (
        <AppStatusContext.Provider value={[appStatus, setAppStatus]}>
            {children}
        </AppStatusContext.Provider>
    )
}