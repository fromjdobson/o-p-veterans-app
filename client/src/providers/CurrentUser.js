import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function CurrentUser({ children }) {
    const [currentUser, setCurrentUser] = useState('not logged in')

    return (
        <UserContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </UserContext.Provider>
    )
}