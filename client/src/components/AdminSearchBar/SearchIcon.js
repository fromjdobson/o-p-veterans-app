import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/icons/search-icon.svg'

const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    top: calc(50% - 24px/2);
    right: 16px;
`

export default function SearchIcon() {

    return (
        <IconContainer>
            <Icon />
        </IconContainer>
    )
}