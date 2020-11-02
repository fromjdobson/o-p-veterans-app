import React, { useContext } from 'react'
import { AppStateContext } from './providers/Store'

export default function OpVeteranApp() {
    const [appState] = useContext(AppStateContext)
    console.log('FROM APP:', appState)
    return (
        <>
            <h1>App Component</h1>
        </>
    )
}