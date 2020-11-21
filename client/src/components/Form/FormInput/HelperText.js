import React from 'react'
import styled from 'styled-components'

const HelperTextContainer = styled.div`
    border: 1px dotted red;

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #EA7C7C;
    }
`

export default function HelperText() {
    return (
        <HelperTextContainer>
            <p>Helper text</p>
        </HelperTextContainer>
    )
}

