import React from 'react'
import styled from 'styled-components'
import SaveButton from '../CardList/SaveButton'
import editIcon from '../../assets/icons/edit-icon.svg'


const ItemContainer = styled.div`
    margin: 0px 0px 0px 0px;
    /* border: 1px dotted dodgerblue; */
`

const LabelContainer = styled.div`
    margin: 0px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    /* border: 1px dotted lightcoral; */

    & > img {
        margin-left: 8px;
    }
`

const LabelText = styled.h5`
    margin: 0px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.015em;
    color: #403926;
`

const InputContainer = styled.div`
    box-sizing: border-box;
    margin: 8px 0px 0px 0px;
    width: 100%;
    display: none;
    border: 1px dotted gray;
`

const StyledInput = styled.input`
    box-sizing: border-box;
    margin: 0px 0px 8px 0px;
    padding: 0px 16px 0px 16px;
    /* width: 180px; */
    width: 100%;
    height: 36px;
    background: #F4F4F4;
    border: none;
    border-radius: 4px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #403926;
`

const HelperText = styled.p`
    margin: 0px 0px 8px 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    display: none;
    align-items: center;
    letter-spacing: 0.01em;
    color: #EA7C7C;
`

export default function Item(props) {
    const { label } = props
    // console.log(label)
    return (
        <ItemContainer>
            <LabelContainer>
                <LabelText>{label}</LabelText>
                <img src={editIcon} alt={'Edit field.'} />
            </LabelContainer>
            <InputContainer>
                <StyledInput />
                <HelperText>{'Helper text'}</HelperText>
                <SaveButton />
            </InputContainer>
        </ItemContainer>
    )
}