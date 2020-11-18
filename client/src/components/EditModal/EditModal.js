import React from 'react'
import styled from 'styled-components'

const EditModalContainer = styled.div`
    border: 1px solid lightcoral;
`

export default function EditModal() {
    return (
        <EditModalContainer>
            <p>Edit</p>
        </EditModalContainer>
    )
}