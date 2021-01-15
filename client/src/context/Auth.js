import React, { useState } from 'react'

export const authContext = React.createContext()

export default function CurrentUser({ children }) {
    const authState = useState(null)

    return (
        <authContext.Provider value={ authState }>
            { children }
        </authContext.Provider>
    )
}