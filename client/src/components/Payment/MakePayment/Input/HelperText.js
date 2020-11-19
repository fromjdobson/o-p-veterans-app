import React from 'react'
import styled from 'styled-components'

const HelperTextContainer = styled.div`
    display: none;
    /* border: 1px solid red; */

    & > p {
        margin: 0px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #EA7C7C;
    }
`

export default function HelperText(props) {
    const { text } = props
    
    return (
        <HelperTextContainer>
            <p>{text}</p>
        </HelperTextContainer>
    )
}