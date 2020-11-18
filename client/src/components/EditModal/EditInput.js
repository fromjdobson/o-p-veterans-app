import React from 'react'
import styled from 'styled-components'

const EditInputContainer = styled.div`
    margin: 16px 0px 24px 0px;
    width: 280px;
    display: flex;
    justify-content: center;
    /* border: 1px solid orange; */

    @media (min-width: 768px) {
        width: 416px;
        justify-content: flex-start;
    }
`

const StyledInput = styled.input`
    /* margin: 16px 0px 24px 0px; */
    width: 56px;
    height: 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: #545454;
    border: 1px solid rgba(84, 84, 84, 0.5);
    box-sizing: border-box;
    border-radius: 2px;

    &:focus {
        outline: 1px solid #799C8A;
    }
`

export default function EditInput(props) {
    const { placeholder } = props

    return (
        <EditInputContainer>
            <StyledInput placeholder={placeholder} />
        </EditInputContainer>
    )
}