import React, { useState } from 'react'

export const BoothStateContext = React.createContext()

export default function BoothState({ children }) {
    const [boothState, setBoothState] = useState({})

    return (
        <BoothStateContext.Provider value={[boothState, setBoothState]}>
            {children}
        </BoothStateContext.Provider>
    )
}