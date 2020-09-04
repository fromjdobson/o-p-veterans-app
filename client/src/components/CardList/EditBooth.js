import React from 'react'
import styled from 'styled-components'
import SaveButton from './SaveButton'

const EditBoothContainer = styled.div`
    margin: 16px 0px 0px 0px;
    display: ${props => props.display};
    align-items: center;
    column-gap: 32px;
    /* border: 1px dotted lightcoral; */
`

const StyledInput = styled.input`
    width: 48px;
    height: 24px;
    border: none;
    background: #DAD3C1;
    border-radius: 4px;
`

export default function EditBooth(props) {
    const { editBooth } = props

    function setEditBoothDisplay(displayValue) {
        if (displayValue === false) {
            return 'none'
        } else if (displayValue === true) {
            return 'flex'
        }
    }

    let boothDisplay = setEditBoothDisplay(editBooth)

    return (
        <EditBoothContainer display={boothDisplay}>
            <StyledInput />
            <SaveButton />
        </EditBoothContainer>
    )
}