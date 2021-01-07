import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function CurrentUser({ children }) {
    const [currentUser, setCurrentUser] = useState('')

    return (
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </UserContext.Provider>
    )
}