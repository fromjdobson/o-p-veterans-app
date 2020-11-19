import React, { useState } from 'react'

export const AdminViewContext = React.createContext()

export default function AdminView({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [toggleStatus, setToggleStatus] = useState('vendor')

    return (
        <AdminViewContext.Provider value={{modal: [isModalOpen, setIsModalOpen], toggle: [toggleStatus, setToggleStatus]}}>
            { children }
        </AdminViewContext.Provider>
    )
}

