import React from 'react'
import styled from 'styled-components'
import moreIconDefault from '../../assets/icons/more-icon-default.svg'

const MoreIconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function MoreIcon() {
    return (
        <MoreIconContainer>
            <img src={moreIconDefault} alt={'Click to see more options.'} />
        </MoreIconContainer>
    )
}