import React from 'react'
import styled from 'styled-components'
import { ReactComponent as RightArrow } from '../../../assets/Icons/arrow-right-icon.svg'

const StyledButton = styled.button`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #618572;
    background: none;
    border: none;
`

const StyledIcon = styled(RightArrow)`
    margin-left: 8px;
`

export default function NextButton() {

    return (
        <StyledButton>
            {'Next'}
            <StyledIcon />
        </StyledButton>
    )
}