import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${props => props.width};
    height: 48px;
    font-family: Open Sans;
    font-weight: ${props => props.fontWeight};
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
    const { 
        buttonText, 
        onClick, 
        name, 
        toggleStyle 
    } = props

    const { 
        width, 
        background, 
        color, 
        fontWeight, 
        opacity 
    } = setToggleStyle(toggleStyle)

    function setToggleStyle(status) {
        if (status === 'active') {
            return {
                width: `55%`,
                background: `#FFFFFF`,
                color: `#4E6A5B`,
                opacity:`1.0`,
                fontWeight: `bold`
            }
        } else if (status === 'inactive') {
            return {
                width: `45%`,
                background: `#3A4F44`,
                color: `#FFFFFF`,
                opacity: `0.4`,
                fontWeight: `normal`
            }
        }
    }

    return  <StyledButton 
                name={name} 
                onClick={onClick}
                width={width}
                background={background} 
                color={color}
                fontWeight={fontWeight}
                opacity={opacity}
            >{buttonText}</StyledButton>
}
