import React from 'react'
import styled from 'styled-components'

const AdminViewContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function AdminView() {
    return (
        <AdminViewContainer>
            <p>Admin View</p>
        </AdminViewContainer>
    )
}