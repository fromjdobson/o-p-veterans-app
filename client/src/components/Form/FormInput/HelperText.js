import React from 'react'
import styled from 'styled-components'

const HelperTextContainer = styled.div`
    box-sizing: border-box;
    width: 100%;

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
        visibility: ${props => props.visibility};
    }
`

export default function HelperText(props) {
    const { visibility } = props

    return (
        <HelperTextContainer visibility={visibility}>
            <p>Helper text</p>
        </HelperTextContainer>
    )
}

