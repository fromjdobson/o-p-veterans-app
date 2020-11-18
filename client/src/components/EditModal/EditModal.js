import React from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'
import PrimaryButton from './PrimaryButton'

const EditModalContainer = styled.div`
    border: 1px solid lightcoral;
`

const ModalTitle = styled.p`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #545454;
    border: 1px dotted dodgerblue;
`

const RowWrapper = styled.div`
    border: 1px solid orange;
`

export default function EditModal() {
    return (
        <EditModalContainer>
            <ModalTitle>{'Modal'}</ModalTitle>
            <EditInput placeholder={'B10'} />
            <RowWrapper>
                <PrimaryButton buttonText={'Cancel'} />
            </RowWrapper>
        </EditModalContainer>
    )
}