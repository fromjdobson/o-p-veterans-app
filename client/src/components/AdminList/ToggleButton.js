import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${props => props.width};
    /* width: 50%; */
    height: 48px;
    background: ${props => props.background};
    opacity: ${props => props.opacity};
    font-family: Open Sans;
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    /* font-weight: bold; */
    font-size: 15px;
    line-height: 24px;
    color: ${props => props.color};
    letter-spacing: 0.02em;
    border: none;
    outline: none;
`

export default function ToggleButton(props) {
    const { isOn, buttonText, toggleClick } = props
    const { background, color, opacity, fontWeight, width } = setToggleStyling(isOn)

    function setToggleStyling(status) {
        if (status === false) {
            return {
                width: `40%`,
                background: `#4E6A5B`,
                fontWeight: `normal`,
                color: `#FFFFFF`,
                opacity: `0.4`
            }
        } else {
            return {
                width: `60%`,
                background: '#FFFFFF',
                fontWeight: `bold`,
                color: `#4E6A5B`,
                opacity: `1.0`
            }
        }
    }

    return <StyledButton onClick={toggleClick} width={width} background={background} color={color} opacity={opacity} fontWeight={fontWeight}>{buttonText}</StyledButton>
}
