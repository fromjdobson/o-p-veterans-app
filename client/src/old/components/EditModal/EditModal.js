import React from 'react'
import styled from 'styled-components'
import EditInput from './EditInput'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Success from './Success'

const EditModalContainer = styled.div`
    padding: 24px 32px 16px 32px;
    max-width: 344px;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid #F4B860;
    box-sizing: border-box;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    & > img {
        width: 24px;
        height: 24px;
        position: absolute;
        top: 24px;
        right: 24px;
    }

    @media (min-width: 768px) {
        max-width: 480px;
    }
`

const ModalTitle = styled.p`
    margin: 0px;
    width: 280px;
    display: flex;
    justify-content: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #545454;

    @media (min-width: 768px) {
        width: 416px;
        justify-content: flex-start;
    }
`

const RowWrapper = styled.div`
    width: 280px;
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        width: 416px;
        justify-content: flex-end;
    }
`

export default function EditModal() {

    return (
        <EditModalContainer>
            <ModalTitle>{'New Booth Number'}</ModalTitle>
            <EditInput placeholder={'B10'} />
            <RowWrapper>
                <SecondaryButton buttonText={'Accept change'} />
                <PrimaryButton buttonText={'Cancel'} />
            </RowWrapper>
            <Success />
        </EditModalContainer>
    )
}