import React from 'react'
import styled from 'styled-components'
import avatar from '../../assets/Icons/avatar-icon.svg'

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    /* display: ${props => props.display}; */

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`

export default function UserIcon() {

    return (
        <IconContainer>
            <img src={avatar} alt={'User is logged in.'} />
        </IconContainer>
    )
}