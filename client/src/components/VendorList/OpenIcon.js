import React, { useContext } from 'react'
import styled from 'styled-components'
import { ListItemContext } from '../../providers/VendorListItemContext'
import closedIcon from '../../assets/Icons/card-closed-icon.svg'

const OpenIconContainer = styled.div`
    min-width: 24px;
    min-height: 24px;
    /* border: 1px dotted dodgerblue; */

    & > img {
        width: 100%;
        height: 100%;
    }
`

export default function OpenIcon() {
    const [isExpanded, setIsExpanded] = useContext(ListItemContext)
    
    function handleClick(input) {
        if (isExpanded === false) {
            setIsExpanded(true)
        }  else if (isExpanded === true) {
            setIsExpanded(false)
        }
    }

    return (
        <OpenIconContainer onClick={handleClick}>
            <img src={closedIcon} alt={'Click to epxand.'} />
        </OpenIconContainer>
    )
}