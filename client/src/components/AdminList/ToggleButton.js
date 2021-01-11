import React from 'react'
import { act } from 'react-dom/test-utils'
import styled from 'styled-components'
import { setButtonStyle } from '../Button/utils'

const StyledButton = styled.button`
    width: 50%;
    height: 48px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.02em;
    background: ${props => props.background};
    border: 1px solid black;
    outline: none;
`

export default function ToggleButton(props) {
    const { buttonText, onClick, name, toggleStyle } = props
    const { background } = setToggleStyle(toggleStyle)

    function setToggleStyle(status) {
        if (status === 'active') {
            return {
                background: `red`
            }
        } else if (status === 'inactive') {
            return {
                background: `green`
            }
        }
    }

    return <StyledButton background={background} name={name} onClick={onClick}>{buttonText}</StyledButton>
}
