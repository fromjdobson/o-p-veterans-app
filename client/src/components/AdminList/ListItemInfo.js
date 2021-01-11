import React from 'react'
import styled from 'styled-components'
import InfoToggle from './InfoToggle'

const InfoContainer = styled.div`
    width: 328px;
    /* padding: 8px 0px 8px 0px; */
    /* height: 240px; */
    display: ${props => props.display};
    background: #FFFFFF;
    /* border: 1px solid #CCCCCC; */

    & > p {
        margin: 8px 0px 8px 0px;
        padding: 0px 16px 0px 16px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 16px;
        display: flex;
        align-items: center;
        color: #545454;
        /* border: 1px dotted blue; */
    }
`

export default function ListItemInfo(props) {
    const {
        className, 
        vendorInfo,
        toggleState,
        setToggleState,
        isExpanded
    } = props

    let info = setInfo(toggleState)

    function setInfo(toggleStatus) {
        if (toggleStatus === 'vendor') {
            const {
                userName,
                email,
                phone,
                streetAddress,
                aptSuite,
                city,
                state,
                zipcode
            } = vendorInfo

            const infoArr = [
                userName,
                email,
                phone,
                streetAddress,
                aptSuite,
                city,
                state,
                zipcode
            ]

            return infoArr
        } else if ('event') {
            const {
                sponsorshipLevel,
                veteranOwned,
                nonProfit,
                powered
            } = vendorInfo

            const infoArr = [
                sponsorshipLevel,
                veteranOwned,
                nonProfit,
                powered
            ]

            return infoArr
        }
    }

    function setExpandDisplay(status) {
        if (status === false) {
            return `none`
        } else if (status === true) {
            return `block`
        }
    }

    return (
        <InfoContainer display={`${setExpandDisplay(isExpanded)}`} className={className}>
            <InfoToggle setToggleState={setToggleState} />
            {info.map((paragraph, idx) => {
                return <p key={idx}>{paragraph}</p>
            })}
        </InfoContainer>
    )
}
