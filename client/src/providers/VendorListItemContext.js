import React, { useState } from 'react'

export const ListItemContext = React.createContext()
export const ToggleContext = React.createContext()

export default function VendorListItemContext({ children }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [toggleState, setToggleState] = useState('vendor')

    return (
        <ListItemContext.Provider value={[isExpanded, setIsExpanded]}>
            <ToggleContext.Provider value={[toggleState, setToggleState]}>
                { children }
            </ToggleContext.Provider>
        </ListItemContext.Provider>
    )
}