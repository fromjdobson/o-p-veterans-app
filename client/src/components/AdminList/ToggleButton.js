import React from 'react'
import { act } from 'react-dom/test-utils'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 50%;
    height: 48px;
    font-family: Open Sans;
    font-style: normal;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: ${props => props.color};
    background: ${props => props.background};
    border: none;
    outline: none;
    opacity: ${props => props.opacity};
`

export default function ToggleButton(props) {
    const { buttonText, onClick, name, toggleStyle } = props
    const { background, color, opacity } = setToggleStyle(toggleStyle)

    function setToggleStyle(status) {
        if (status === 'active') {
            return {
                background: `#FFFFFF`,
                color: `#4E6A5B`,
                opacity:`1.0`
                
            }
        } else if (status === 'inactive') {
            return {
                background: `#3A4F44`,
                color: `#FFFFFF`,
                opacity: `0.4`
            }
        }
    }

    return  <StyledButton 
                name={name} 
                onClick={onClick}
                background={background} 
                color={color}
                opacity={opacity}
            >{buttonText}</StyledButton>
}
