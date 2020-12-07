import React from 'react'
import styled from 'styled-components'
import { ReactComponent as RightArrow } from '../../assets/Icons/arrow-right-icon.svg'

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

    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 32px;
    }
`

const StyledIcon = styled(RightArrow)`
    margin-left: 8px;

    @media (min-width: 768px) {
        margin-left: 16px;
        min-width: 24px;
        min-height: 24px;
    }
`

export default function NextButton(props) {
    const { onClick } = props

    return (
        <StyledButton onClick={onClick}>
            {'Next'}
            <StyledIcon />
        </StyledButton>
    )
}