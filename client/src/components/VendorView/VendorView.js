import React from 'react'
import styled from 'styled-components'

import SaveButton from '../CardList/SaveButton'
import editIcon from '../../assets/icons/edit-icon.svg'

const VendorViewContainer = styled.div`
    margin-top: 60px;
    box-sizing: border-box;
    width: 328px;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    padding: 20px 24px 48px 24px;
    background: #DAD3C1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 624px;
        height: 720px;
        padding: 48px 80px 48px 80px;
    }
    /* border: 1px solid lightcoral; */
`

const Heading = styled.h3`
    margin: 0px 0px 0px 0px;
    width: 100%;
    height: 64px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
    /* border: 1px dotted gray; */
`

const SubHeading = styled.h6`
    margin: 0px 0px 16px 0px;
    width: 100%;
    height: 72px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #403926;
    overflow: hidden;
    /* border: 1px dotted gray; */
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    /* border: 1px solid green; */
`

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

export default function VendorView() {
    return (
        <VendorViewContainer>
            <Heading>{`Welcome, ${'User'}.`}</Heading>
            <SubHeading>{'View and make changes to your vendor profile.'}</SubHeading>
            <ListContainer>
                <ItemContainer>
                    <LabelContainer>
                        <LabelText>{'Label'}</LabelText>
                        <img src={editIcon} alt={'Edit field.'} />
                    </LabelContainer>
                    <InputContainer>
                        <StyledInput />
                        <HelperText>{'Helper text'}</HelperText>
                        <SaveButton />
                    </InputContainer>
                </ItemContainer>

                <ItemContainer>
                    <LabelContainer>
                        <LabelText>{'Label'}</LabelText>
                        <img src={editIcon} alt={'Edit field.'} />
                    </LabelContainer>
                    <InputContainer>
                        <StyledInput />
                        <HelperText>{'Helper text'}</HelperText>
                        <SaveButton />
                    </InputContainer>
                </ItemContainer>
            </ListContainer>
        </VendorViewContainer>
    )
}