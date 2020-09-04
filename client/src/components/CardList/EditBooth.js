import React from 'react'
import styled from 'styled-components'

const EditBoothContainer = styled.div`
    border: 1px dotted lightcoral;
`

const StyledInput = styled.input`
    background: blue;
`

export default function EditBooth() {
    return (
        <EditBoothContainer>
            <StyledInput />
        </EditBoothContainer>
    )
}