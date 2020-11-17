import React, { useState } from 'react'

export const SponsorshipCardContext = React.createContext()

export default function SponsorshipContext({ children }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <SponsorshipCardContext.Provider value={[isExpanded, setIsExpanded]}>
            { children }
        </SponsorshipCardContext.Provider>
    )
}