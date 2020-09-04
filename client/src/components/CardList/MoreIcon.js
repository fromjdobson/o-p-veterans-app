import React from 'react'
import styled from 'styled-components'
import moreIconDefault from '../../assets/icons/more-icon-default.svg'
import moreIconOpen from '../../assets/icons/more-icon-open.svg'

const MoreIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function MoreIcon(props) {
    const { func, openDiv } = props

    function setMoreIcon(isOpen) {
        if (isOpen === false) {
            return <img src={moreIconDefault} alt={'Click to see more options.'} />
        } else if (isOpen === true) {
            return <img src={moreIconOpen} alt={'Click to see less options.'} />
        }
    }

    let icon = setMoreIcon(openDiv)
    
    return (
        <MoreIconContainer onClick={func}>
            {icon}
        </MoreIconContainer>
    )
}