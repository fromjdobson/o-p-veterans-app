import React from 'react'
import styled from 'styled-components'

const HelperTextContainer = styled.div`
    border: 1px dotted red;

    & > p {
        margin: 0px;
    }
`

export default function HelperText() {
    return (
        <HelperTextContainer>
            <p>Helper text</p>
        </HelperTextContainer>
    )
}

