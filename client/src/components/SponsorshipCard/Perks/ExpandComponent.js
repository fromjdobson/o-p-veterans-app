import React, { useContext } from 'react'
import styled from 'styled-components'
import { SponsorshipCardContext } from '../../../providers/SponsorshipContext'
import cardClosedIcon from '../../../assets/Icons/card-closed-icon.svg'

const ExpandContainer = styled.div`
    display: flex;

    & > p {
        margin: 0px 8px 0px 0px;
        width: 170px;
        height: 24px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #799C8A;
    }

    & > img {
        margin: 0px 0px 0px 0px;
    }
`

export default function ExpandComponent() {
    const [isExpanded, setIsExpanded] = useContext(SponsorshipCardContext)

    function handleClick() {
        setIsExpanded(() => {
            if (isExpanded === false) {
                return true
            } else if (isExpanded === true) {
                return false
            }
        })
    }

    return (
        <ExpandContainer onClick={handleClick}>
            <p>Expand for perks</p>
            <img src={cardClosedIcon} alt={'Click to see more information.'} />
        </ExpandContainer>
    )
}