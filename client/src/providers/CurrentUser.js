import React, { useState } from 'react'

export const CurrentUserContext = React.createContext()

export default function CurrentUser({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </CurrentUserContext.Provider>
    )
}