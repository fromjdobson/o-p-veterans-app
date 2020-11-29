import React, { useState } from 'react'

export const UserStateContext = React.createContext()

export default function UserContext({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <UserStateContext.Provider value={[currentUser, setCurrentUser]}>
            { children }
        </UserStateContext.Provider>
    )
}