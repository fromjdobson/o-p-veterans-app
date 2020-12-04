import React, { useState } from 'react'

export const BoothStateContext = React.createContext()

export default function BoothContext({ children }) {
    const [boothState, setBoothState] = useState({})

    return (
        <BoothStateContext.Provider value={[boothState, setBoothState]}>
            { children }
        </BoothStateContext.Provider>
    )
}