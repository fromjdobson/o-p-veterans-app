import React, { useContext } from 'react'
import styled from 'styled-components'
import { AdminViewContext } from '../../providers/AdminView'
import TextButton from './TextButton'

const EventInfoContainer = styled.div`
    box-sizing: border-box;
    padding: 16px;
    height: 192px;
    /* border: 1px dashed red; */
`

const StyledP = styled.p`
    margin: 8px 0px 8px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #545454;
    /* border: 1px solid lightblue; */
`

const SponsorLevelText = styled.div`
    margin: 0px 0px 0px 0px;
    width: 100%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    color: #545454;
    /* border: 1px solid purple; */
`

const RowWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid darkgreen; */
`

export default function EventInfo() {
    const { modal } = useContext(AdminViewContext)
    const [, setIsModalOpen] = modal

    

    return (
        <EventInfoContainer>
            <SponsorLevelText>{'helo'}</SponsorLevelText>
            <StyledP>{'vet owned'}</StyledP>
            <StyledP>{'non profit'}</StyledP>
            <StyledP>{'powered'}</StyledP>
            <RowWrapper>
                <TextButton buttonText={'Change booth number'} onClick={() => setIsModalOpen(true)} />
            </RowWrapper>
        </EventInfoContainer>
    )
}