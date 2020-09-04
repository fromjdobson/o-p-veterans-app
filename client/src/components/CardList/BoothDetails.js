import React from 'react'
import styled from 'styled-components'
import MoreIcon from './MoreIcon'
import boothIcon from '../../assets/icons/booth-icon.svg'
import editIcon from '../../assets/icons/edit-icon.svg'
import poweredIcon from '../../assets/icons/powered-icon.svg'

const BoothDetailsContainer = styled.div`
    margin: 8px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px dotted blue; */

    & > img {
        width: 20px;
        height: 20px;
        /* border: 1px dotted gray; */
    }
`

const DetailsText = styled.p`
    margin: 0px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #403926;
`

const BoothNumberWrapper = styled.div`
    display: flex;
    column-gap: 8px;
    /* border: 1px solid lightcoral; */
`

const PoweredWrapper = styled.div`
    display: flex;
    column-gap: 8px;
    /* border: 1px solid blue; */
`

export default function BoothDetais(props) {
    const { func } = props

    return (
        <BoothDetailsContainer>
            <BoothNumberWrapper>
                <img src={boothIcon} alt={'Booth icon.'} />
                <DetailsText>{'A99'}</DetailsText>
                <img src={editIcon} alt={'Click to edit booth number.'} />
            </BoothNumberWrapper>
            <PoweredWrapper>
                <img src={poweredIcon} alt={'Powered icon.'} />
                <DetailsText>{'Yes'}</DetailsText>
            </PoweredWrapper>
            <MoreIcon func={func} />
        </BoothDetailsContainer>
    )
}