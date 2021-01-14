import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    width: 328px;
    height: 144px;
    position: relative;
    top: 224px;
    left: calc(50% - 328px/2);
    border: 1px dotted blue;
`

export default function Form() {
    
    return (
        <FormContainer>
            <p>Form</p>
        </FormContainer>
    )
}